import { error, info } from "@postfmly/logger"

import { default as pluralize } from "@jarrodek/pluralize"
import { parse as ms } from "@lukeed/ms"

import { env } from "./env.ts"

interface IBucketConfig {
  /** Show debug logging
   * @default false */
  readonly DEBUG?: boolean
  /** Window size, in seconds
   * @default 1 */
  readonly INTERVAL?: number
  /** Maximum number of request per {@link INTERVAL}
   * @default 1 */
  readonly RATE?: number
}

interface ICache {
  count: number
  time: Date
}

/** Limit usage to {@link RATE} request(s) per {@link INTERVAL} second(s)
 * @summary Defaults to 1 request per second */
class Bucket implements IBucketConfig {
  readonly DEBUG: boolean
  readonly INTERVAL: number
  readonly RATE: number

  private readonly INTERVAL_MS: number
  private readonly LIMIT: number

  private readonly cache: Map<string, ICache> = new Map<string, ICache>()

  private readonly timer: Timer

  private readonly CLEAN_MINS = 1
  private readonly CLEAN_SCALE = 2

  private readonly STALE_MINS = 5
  private readonly STALE_SCALE = 5

  /** Bucket constructor
   * @param config The configuration
   * @see {@link IBucketConfig}
   * @default {} */
  constructor(config: IBucketConfig = {}) {
    this.DEBUG = config.DEBUG ?? env.DEBUG
    this.INTERVAL = config.INTERVAL ?? env.INTERVAL
    this.RATE = config.RATE ?? env.RATE

    this.INTERVAL_MS = ms(`${this.INTERVAL}s`)
    this.LIMIT = this.RATE

    this.timer = setInterval(
      (): void => this.clean(),
      Math.max(ms(`${this.CLEAN_MINS}m`), this.INTERVAL_MS * this.CLEAN_SCALE)
    )
    this.timer.unref()

    if (this.DEBUG) {
      info(
        `✋ Rate limit set to ${pluralize("request", this.RATE, true)} per ${pluralize("second", this.INTERVAL, true)}`
      )
    }
  }

  private fill(item: ICache): void {
    const elapsed = Date.now() - item.time.getTime()
    if (elapsed >= this.INTERVAL_MS) {
      const intervals = Math.floor(elapsed / this.INTERVAL_MS)

      item.count = Math.min(this.LIMIT, item.count + intervals * this.RATE)

      item.time = new Date(item.time.getTime() + intervals * this.INTERVAL_MS)
    }
  }

  private clean(): void {
    const now = Date.now()

    const max = Math.max(ms(`${this.STALE_MINS}m`), this.INTERVAL_MS * this.STALE_SCALE)

    for (const [k, v] of this.cache.entries()) {
      if (now - v.time.getTime() > max) {
        this.cache.delete(k)
      }
    }
  }

  /** Check if request is allowed
   * @param key The key
   * @returns True if request is allowed, false if limit has been reached */
  allow = (key: string): boolean => {
    let item = this.cache.get(key)
    if (!item) {
      item = { count: this.LIMIT, time: new Date() } satisfies ICache

      this.cache.set(key, item)
    }

    this.fill(item)

    if (item.count >= 1) {
      item.count -= 1

      return true
    }

    if (this.DEBUG) {
      error(`❌ Rate limit exceeded for ${key}`)
    }

    return false
  }
}

export { Bucket, type IBucketConfig }
