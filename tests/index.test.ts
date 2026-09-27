import { describe, expect, test } from "bun:test"

import { checkRate } from "../index.ts"

describe("checkRate", (): void => {
  test("pass", (): void => {
    expect(checkRate()).toBeTrue()
  })

  test("fail", (): void => {
    checkRate()

    expect(checkRate()).toBeFalse()
  })
})
