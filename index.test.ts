// sum.test.ts
import { expect, test } from "bun:test";
import { sum } from "./index";
import { Effect } from "effect"

test("adds two numbers", () => {
  expect(sum(1, 2)).toBe(3);
});


test("success", () => {
  expect(Effect.runSync(Effect.succeed(42))).toBe((42));
});

test("Effect.pipe", () => {
  expect(Effect.runSync(Effect.succeed(42).pipe(Effect.map(i => i * 2)))).toBe((84));
});
