import { describe, expect, spyOn, test } from "bun:test"

import { Bucket } from "../index.ts"

// suppress console messages
spyOn(console, "info").mockImplementation((): void => undefined)
spyOn(console, "error").mockImplementation((): void => undefined)

const bucket: Bucket = new Bucket()

describe("checkRate", (): void => {
  test("pass", (): void => {
    expect(bucket.allow("test")).toBeTrue()
  })

  test("fail", (): void => {
    expect(bucket.allow("test")).toBeFalse() // * NOTE: Counts as second request within 1 second
  })
})
