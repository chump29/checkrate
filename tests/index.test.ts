import { describe, expect, spyOn, test } from "bun:test"

import { env } from "../env.ts"
import { Bucket } from "../index.ts"

if (!env.TEST_FULL) {
  spyOn(console, "info").mockImplementation((): void => undefined)
  spyOn(console, "error").mockImplementation((): void => undefined)
}

const bucket = new Bucket()

describe("checkRate", (): void => {
  test("pass", (): void => {
    expect(bucket.allow("test")).toBeTrue()
  })

  test("fail", (): void => {
    expect(bucket.allow("test")).toBeFalse() // * NOTE: Counts as second request within 1 second
  })
})
