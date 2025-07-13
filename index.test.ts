// sum.test.ts
import { expect, test } from "bun:test";
import { sum } from "./index";

test("adds two numbers", () => {
  expect(sum(1, 2)).toBe(3);
});

