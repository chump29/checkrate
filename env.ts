import { bool, cleanEnv, num } from "envalid"

const env = cleanEnv(Bun.env, {
  DEBUG: bool({ default: false, testDefault: true }),

  // * NOTE: defaults to once per second
  INTERVAL: num({ default: 1 }), // in seconds
  RATE: num({ default: 1 })
})

export { env }
