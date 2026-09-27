import { describe, expect, test } from "bun:test"

import { allow } from "../index.ts"

describe("checkRate", (): void => {
  test("pass", (): void => {
    expect(allow()).toBeTrue()
  })

  test("fail", (): void => {
    expect(allow()).toBeFalse() // * NOTE: Test is fast. Counts as second request within 1 second.
  })
})
