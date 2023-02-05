import { expect } from "chai";
import { diceHandValue } from "../src/untestable2.mjs";

describe("Untestable 2: a dice game", () => {
  it("die1 equals die2, value is 1", () => {
    expect(diceHandValue(1, 1)).to.be.a("number");
    expect(diceHandValue(1, 1)).to.equal(101);
  });
});
