import { info } from "@postfmly/logger"

import { default as pluralize } from "@jarrodek/pluralize"
import { RateLimiter } from "limiter"

import { env } from "./env.ts"

const { DEBUG, INTERVAL, RATE } = env as typeof env

const limiter: RateLimiter = new RateLimiter({ interval: INTERVAL, tokensPerInterval: RATE })

/**
 * Check rate limit
 * @function
 * @returns {boolean} False if rate limit exceeded
 */
const checkRate = (): boolean => limiter.tryRemoveTokens(1) === true // * NOTE: widening for runtime evaluation

if (DEBUG) {
  info(`✋ Rate limit set to ${pluralize("request", RATE, true)} per ${INTERVAL}`)
}

export { checkRate }
