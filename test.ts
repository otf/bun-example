// sum.test.ts
import { expect, test } from "bun";
import { sum } from "./sum";

test("adds two numbers", () => {
  expect(sum(1, 2)).toBe(3);
});

