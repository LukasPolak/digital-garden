import { formatNumber } from "./format-number";

describe("formatNumber", () => {
  it("should format date", () => {
    expect(formatNumber(10000)).toBe("10K");
  });
});
