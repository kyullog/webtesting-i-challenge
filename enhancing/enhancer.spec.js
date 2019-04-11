const enhancer = require("./enhancer.js");
const {
  oldSword,
  magicSword,
  oldShield,
  ultimateSpear
} = require("../items.js");

const { repair, succeed } = enhancer;
// test away!
describe("the repair function", () => {
  it("should return a new item with durability of 100", () => {
    expect(repair(oldSword)).toEqual({ ...oldSword, durability: 100 });
    expect(repair(magicSword)).toEqual({ ...magicSword, durability: 100 });
    expect(repair(ultimateSpear)).toEqual({ ...ultimateSpear });
  });
});
describe("the enhancement suite", () => {
  describe("a successful enhancement", () => {
    it(`should increase enhancement by 1, unless enhancment is 20, without changing durability`, () => {
      expect(succeed(oldSword)).toEqual({ ...oldSword, enhancement: 5 });
      expect(succeed(ultimateSpear)).toEqual({ ...ultimateSpear });
      expect(succeed(oldShield)).toEqual({ ...oldShield, enhancement: 2 });
    });
  });
});
