export const state = () => ({
  levelGoals: [
    0, 50, 100, 150, 250, 400, 650, 1050, 1700, 2750, 4500, 6800, 11300, 18100,
    29400, 47500, 76900, 124400,
  ],
  swordsman: {
    class: "swordsman",
    special: "En'garde",
    specialDescription:
      "Spend one mettle to gain +1 Armor. The monster won’t attack you back when you use En'garde.",
    attackType: "physical",
    attackDescription:
      "Physical attack is represented by this dagger icon. It is abbreviated ATK.",
    maxAttack: 10,
    attack: 10,
    armorType: "physical",
    armorDescription:
      "Physical armor is represented by this shield icon. (abbreviated ARM)",
    maxArmor: 10,
    armor: 10,
    maxHealth: 10,
    health: 10,
    maxMettle: 3,
    mettle: 1,
    curse: 0,
    curseResistance: 100,
    level: 1,
    exp: 0,
  },
  mage: {
    class: "mage",
    special: "Variegate",
    specialDescription:
      "Spend one mettle to halve enemy HP. The monster won’t attack you back when you use Variegate.",
    attackType: "magical",
    attackDescription:
      "Magical attack is represented by this fireball icon. It is abbreviated MAG.",
    maxAttack: 10,
    attack: 10,
    armorType: "magical",
    armorDescription:
      "Magical armor (called ward) is represented by this triple hexagon icon. (abbreviated WRD)",
    maxArmor: 10,
    armor: 10,
    maxHealth: 10,
    health: 10,
    maxMettle: 3,
    mettle: 1,
    curse: 0,
    curseResistance: 100,
    level: 1,
    exp: 0,
  },
  varlet: {
    class: "varlet",
    special: "Peculate",
    specialDescription:
      "Deals 1/4 your max damage rounding up. Kill a monster using Peculate to gain 2 extra gold.",
    attackType: "physical",
    attackDescription:
      "Physical attack is represented by this dagger icon. It is abbreviated ATK.",
    maxAttack: 10,
    attack: 10,
    armorType: "physical",
    armorDescription:
      "Physical armor is represented by this shield icon. (abbreviated ARM)",
    maxArmor: 10,
    armor: 10,
    maxHealth: 10,
    health: 10,
    maxMettle: 3,
    mettle: 1,
    curse: 0,
    curseResistance: 100,
    level: 1,
    exp: 0,
  },
});
