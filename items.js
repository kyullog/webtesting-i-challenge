function itemMaker(name, enhancement, durability) {
  return {
    name,
    enhancement,
    durability
  };
}

module.exports = {
  oldSword: itemMaker("Battered Bastard Sword", 4, 17),
  magicSword: itemMaker("Sting", 16, 68),
  oldShield: itemMaker("Wood Shield", 1, 45)
};
