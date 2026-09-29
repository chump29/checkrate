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
  /** Maximum number of request per {@link INTERVAL} */
  readonly RATE: Optional<number>
}

/** Limit usage to {@link RATE} request(s) per {@link INTERVAL} second(s)
 * @summary Defaults to 1 request per second */
class Bucket implements IBucketConfig {
  readonly DEBUG: boolean
  readonly INTERVAL: number
  readonly RATE: number

  private readonly INTERVAL_MS: number
  private readonly LIMIT: number
  private count: number
  private time: dayjs.Dayjs

  constructor(config: IBucketConfig) {
    this.DEBUG = parse(optional(pipe(unknown(), toBoolean()), false), config.DEBUG)
    this.INTERVAL = parse(optional(pipe(number(), integer()), 1), config.INTERVAL)
    this.RATE = parse(optional(pipe(number(), integer()), 1), config.RATE)

    this.INTERVAL_MS = ms(`${this.INTERVAL}s`) as number
    this.LIMIT = this.RATE
    this.count = this.LIMIT
    this.time = dayjs()

    if (this.DEBUG) {
      info(
        `✋ Rate limit set to ${pluralize("request", this.RATE, true)} per ${pluralize("second", this.INTERVAL, true)}`
      )
    }
  }

  private fill(): void {
    const elapsed: number = dayjs().diff(this.time, "milliseconds")
    if (elapsed >= this.INTERVAL_MS) {
      const intervals: number = Math.floor(elapsed / this.INTERVAL_MS)

      this.count = Math.min(this.LIMIT, this.count + intervals * this.RATE)

      this.time = this.time.add(intervals * this.INTERVAL_MS, "milliseconds")
    }
  }

  /** Check if request is allowed
   * @returns {boolean} True if request is allowed, false if limit has been reached */
  allow = (): boolean => {
    this.fill()

    if (this.count >= 1) {
      this.count -= 1

      return true
    }

    if (this.DEBUG) {
      error("❌ Rate limit exceeded")
    }

    return false
  }
}

export { Bucket, type IBucketConfig }
