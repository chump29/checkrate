import { describe, expect, test } from "bun:test"

import { Bucket } from "../index.ts"

const bucket: Bucket = new Bucket()

describe("checkRate", (): void => {
  test("pass", (): void => {
    expect(bucket.allow("test")).toBeTrue()
  })

  test("fail", (): void => {
    expect(bucket.allow("test")).toBeFalse() // * NOTE: Test is fast. Counts as second request within 1 second.
  })
})
