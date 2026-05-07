import { type ChatInputCommandInteraction, MessageFlags, type User } from "discord.js"

import { info } from "@postfmly/logger"

import { RateLimiter } from "discord.js-rate-limiter"
import ms, { type StringValue } from "ms"

const DEBUG: boolean = Bun.env.IS_DEBUG === "true"

const RATE_LIMIT: number = ms((Bun.env.RATE || "1s") as StringValue)
const rateLimiter: RateLimiter = new RateLimiter(1, RATE_LIMIT)

const checkRate = async (interaction: ChatInputCommandInteraction): Promise<boolean> => {
  const user: User = interaction.user as User

  if (user.bot) {
    return true
  }

  if (rateLimiter.take(user.id)) {
    await interaction.reply({
      content: "-# > Wait a few seconds and try again.",
      flags: MessageFlags.Ephemeral
    })
    return true
  }
  return false
}

if (DEBUG) {
  info(
    `Limiting message rate to ${ms(RATE_LIMIT, {
      long: true
    })}`
  )
}

export { checkRate }
