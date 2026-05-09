import { afterEach, describe, expect, jest, mock, test } from "bun:test"

import { type ChatInputCommandInteraction, type User } from "discord.js"

import { id } from "@nano-faker/number"

import { checkRate } from "./index.ts"

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

  const ID_LEN: number = 19

  const interaction: ChatInputCommandInteraction = {
    reply: jest.fn(),
    user: {
      bot: false,
      id: id(ID_LEN)
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
