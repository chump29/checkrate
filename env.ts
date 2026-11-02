import { printVars } from "@postfmly/logger"

import { bool, cleanEnv, num } from "envalid"

const env = cleanEnv(Bun.env, {
  DEBUG: bool({ default: false, testDefault: true }),
  INTERVAL: num({ default: 1 }),
  RATE: num({ default: 1 }),
  TEST_FULL: bool({ default: false })
})

if (import.meta.main) {
  printVars(env)
}

export { env }
