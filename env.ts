import { bool, cleanEnv, num, str } from "envalid"

const env = cleanEnv(Bun.env, {
  DEBUG: bool({ default: false, testDefault: true }),
  INTERVAL: str({ choices: ["second", "minute"], default: "second", testDefault: "minute" }),
  RATE: num({ default: 1 })
})

export { env }
