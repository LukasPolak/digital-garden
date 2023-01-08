import { formatDate } from "./format-date";

describe("formatDate", () => {
  it("should format date", () => {
    const date = new Date(2021, 6, 18);
    expect(formatDate(date)).toBe("July 18, 2021");
  });
});
