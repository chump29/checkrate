import { error, info } from "@postfmly/logger"
import { type Optional } from "@postfmly/types"

import { default as pluralize } from "@jarrodek/pluralize"
import { parse as ms } from "@lukeed/ms"
import { default as dayjs } from "dayjs"
import { integer, number, optional, parse, pipe, toBoolean, unknown } from "valibot"

interface IBucketConfig {
  /** Show debug logging
   * @default false */
  readonly DEBUG: Optional<boolean>
  /** Window size, in seconds
   * @default 1 */
  readonly INTERVAL: Optional<number>
  /** Maximum number of request per {@link INTERVAL}
   * @default 1 */
  readonly RATE: Optional<number>
}

interface IUser {
  count: number
  time: dayjs.Dayjs
}

/** Limit usage to {@link RATE} request(s) per {@link INTERVAL} second(s)
 * @summary Defaults to 1 request per second */
class Bucket implements IBucketConfig {
  readonly DEBUG: boolean
  readonly INTERVAL: number
  readonly RATE: number

  private readonly INTERVAL_MS: number
  private readonly LIMIT: number

  private readonly users: Map<string, IUser> = new Map<string, IUser>()

  private readonly timer: Timer

  private readonly CLEAN_MINS: number = 1
  private readonly CLEAN_SCALE: number = 2

  private readonly STALE_MINS: number = 5
  private readonly STALE_SCALE: number = 5

  /** Bucket constructor
   * @param {IBucketConfig} [config] The configuration
   * @default {} */
  constructor(config: IBucketConfig = {} as IBucketConfig) {
    this.DEBUG = parse(optional(pipe(unknown(), toBoolean()), false), config.DEBUG)
    this.INTERVAL = parse(optional(pipe(number(), integer()), 1), config.INTERVAL)
    this.RATE = parse(optional(pipe(number(), integer()), 1), config.RATE)

    this.INTERVAL_MS = ms(`${this.INTERVAL}s`) as number
    this.LIMIT = this.RATE

    this.timer = setInterval(
      (): void => this.clean(),
      Math.max(ms(`${this.CLEAN_MINS}m`) as number, this.INTERVAL_MS * this.CLEAN_SCALE)
    )
    this.timer.unref()

    if (this.DEBUG) {
      info(
        `✋ Rate limit set to ${pluralize("request", this.RATE, true)} per ${pluralize("second", this.INTERVAL, true)}`
      )
    }
  }

  private fill(user: IUser): void {
    const elapsed: number = dayjs().diff(user.time, "milliseconds")
    if (elapsed >= this.INTERVAL_MS) {
      const intervals: number = Math.floor(elapsed / this.INTERVAL_MS)

      user.count = Math.min(this.LIMIT, user.count + intervals * this.RATE)

      user.time = user.time.add(intervals * this.INTERVAL_MS, "milliseconds")
    }
  }

  private clean(): void {
    const now: dayjs.Dayjs = dayjs()

    for (const [username, user] of this.users.entries()) {
      if (now.diff(user.time) > Math.max(ms(`${this.STALE_MINS}m`) as number, this.INTERVAL_MS * this.STALE_SCALE)) {
        this.users.delete(username)
      }
    }
  }

  /** Check if request is allowed
   * @returns {boolean} True if request is allowed, false if limit has been reached */
  allow = (username: string): boolean => {
    let user: Optional<IUser> = this.users.get(username)
    if (!user) {
      user = { count: this.LIMIT, time: dayjs() } satisfies IUser

      this.users.set(username, user)
    }

    this.fill(user)

    if (user.count >= 1) {
      user.count -= 1

      return true
    }

    if (this.DEBUG) {
      error(`❌ Rate limit exceeded for ${username}`)
    }

    return false
  }
}

export { Bucket, type IBucketConfig }
