function itemMaker(name, enhancement, durability) {
  return {
    name,
    enhancement,
    durability
  };
}

module.exports = {
  stick: itemMaker("Wooden Stick", 0, 10),
  oldSword: itemMaker("Battered Bastard Sword", 4, 17),
  oldShield: itemMaker("Wood Shield", 15, 45),
  magicSword: itemMaker("Sting", 16, 68),
  ultimateSpear: itemMaker("Platinum Pike", 20, 100)
};
