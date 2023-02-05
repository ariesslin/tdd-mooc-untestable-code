import { expect } from "chai";
import { daysUntilChristmas } from "../src/untestable1.mjs";

describe("Untestable 1: days until Christmas", () => {
  it("same year Christmas Eve", () => {
    expect(daysUntilChristmas("2023-12-24")).to.be.a("number");
    expect(daysUntilChristmas("2023-12-24")).to.equal(1);
  });

  it("same year Christmas", () => {
    expect(daysUntilChristmas("2023-12-25")).to.equal(0);
  });
});
