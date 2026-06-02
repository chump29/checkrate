import { afterEach, describe, expect, jest, mock, test } from "bun:test"

import { type ChatInputCommandInteraction, type User } from "discord.js"

import { randSequence } from "@ngneat/falso"

import { checkRate } from "../index.ts"

let retVal: boolean = false

afterEach((): void => {
  retVal = false
})

describe("checkRate", (): void => {
  mock.module("discord.js-rate-limiter", (): unknown => {
    return {
      take: jest.fn().mockReturnValue(retVal)
    }
  })

  const interaction: ChatInputCommandInteraction = {
    reply: jest.fn(),
    user: {
      bot: false,
      id: randSequence({
        charType: "numeric",
        size: 19
      }).toString()
    } as User
  } as unknown as ChatInputCommandInteraction

  test("pass", (): void => {
    expect(checkRate(interaction)).resolves.toBeFalse()
  })

  test("fail", (): void => {
    retVal = true

    expect(checkRate(interaction)).resolves.toBeTrue()
  })

  test("bot", (): void => {
    interaction.user.bot = true

    expect(checkRate(interaction)).resolves.toBeTrue()
  })
})
