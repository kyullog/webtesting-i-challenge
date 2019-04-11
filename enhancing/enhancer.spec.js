const enhancer = require("./enhancer.js");
const { oldSword, magicSword, oldShield } = require("../items.js");

const { repair } = enhancer;
// test away!
describe("the enhancement suite", () => {
  describe("the repair function", () => {
    it("should return a new item with durability of 100", () => {
      expect(repair(oldSword)).toEqual({ ...oldSword, durability: 100 });
      expect(repair(magicSword)).toEqual({ ...magicSword, durability: 100 });
    });
  });
});
