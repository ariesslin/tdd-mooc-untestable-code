import { expect } from "chai";
import { diceHandValue } from "../src/untestable2.mjs";

describe("Untestable 2: a dice game", () => {
  it("die1 equals die2, value is 1", () => {
    expect(diceHandValue(1, 1)).to.be.a("number");
    expect(diceHandValue(1, 1)).to.equal(101);
  });

  it("die1 higher than die2", () => {
    expect(diceHandValue(5, 3)).to.equal(5);
  });

  it("die1 lower than die2", () => {
    expect(diceHandValue(2, 6)).to.equal(6);
  });
});
