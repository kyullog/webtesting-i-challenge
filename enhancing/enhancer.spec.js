const enhancer = require("./enhancer.js");
const {
  oldSword,
  magicSword,
  oldShield,
  ultimateSpear
} = require("../items.js");

const { repair, succeed, fail } = enhancer;
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
      expect(succeed(magicSword)).toEqual({ ...magicSword, enhancement: 17 });
      expect(succeed(ultimateSpear)).toEqual({ ...ultimateSpear });
      expect(succeed(oldShield)).toEqual({ ...oldShield, enhancement: 16 });
    });
  });
  describe("a failed enhancement", () => {
    it("decreases durability by 5 if enhancement < 15, by 10 if enhancement > 15, and will decrease enhancement by 1 if enhancement > 16", () => {
      expect(fail(oldSword)).toEqual({ ...oldSword, durability: 12 });
      expect(fail(oldShield)).toEqual({ ...oldShield, durability: 35 });
      expect(fail(magicSword)).toEqual({
        ...magicSword,
        durability: 58
      });
      expect(fail(ultimateSpear)).toEqual({
        ...ultimateSpear,
        enhancement: 19,
        durability: 90
      });
    });
  });
});
