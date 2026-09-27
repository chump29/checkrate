import { error, info } from "@postfmly/logger"

import { default as pluralize } from "@jarrodek/pluralize"
import { parse as ms } from "@lukeed/ms"
import { default as dayjs } from "dayjs"

import { env } from "./env.ts"

const { DEBUG, INTERVAL, RATE } = env as typeof env

interface BucketConfig {
  readonly interval: number
  readonly rate: number
}

// * Limits usage to RATE request(s) per INTERVAL second(s)
class Bucket implements BucketConfig {
  readonly interval: number
  readonly rate: number

  private readonly limit: number
  private count: number
  private time: dayjs.Dayjs

  constructor(config: BucketConfig) {
    this.interval = ms(`${config.interval}s`) as number
    this.rate = config.rate

    this.limit = config.rate
    this.count = this.limit
    this.time = dayjs()
  }

  private fill(): void {
    const elapsed: number = dayjs().diff(this.time, "milliseconds")
    if (elapsed >= this.interval) {
      const intervals: number = Math.floor(elapsed / this.interval)

      this.count = Math.min(this.limit, this.count + intervals * this.rate)

      this.time = this.time.add(intervals * this.interval, "milliseconds")
    }
  }

  allow(): boolean {
    this.fill()

    if (this.count >= 1) {
      this.count -= 1

      return true
    }

    if (DEBUG) {
      error("❌ Rate limit exceeded")
    }

    return false
  }
}

if (DEBUG) {
  info(`✋ Rate limit set to ${pluralize("request", RATE, true)} per ${pluralize("second", INTERVAL, true)}`)
}

const bucket: Bucket = new Bucket({ interval: INTERVAL, rate: RATE } as BucketConfig)

export const allow = (): boolean => bucket.allow()
