import playerDataMutations from "./playerDataMutations";

export const state = () => ({
  player: {
    class: "swordsman",
    special: "En'garde",
    specialDescription:
      "Spend one mettle to gain +1 Armor. The monster won’t attack you back when you use En'garde.",
    attackType: "physical",
    attackDescription:
      "Physical attack is represented by this dagger icon. (abbreviated ATK)",
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
    mettle: 3,
    curse: 0,
    curseResistance: 100,
    level: 1,
    wealth: 0,
    inventory: [
      { icon: "" },
      { icon: "" },
      { icon: "" },
      { icon: "" },
      { icon: "" },
      { icon: "" },
      { icon: "" },
      { icon: "" },
      { icon: "" },
    ],
    exp: 0,
  },
  levelGoals: [
    0, 50, 100, 150, 250, 400, 650, 1050, 1700, 2750, 4500, 6800, 11300, 18100,
    29400, 47500, 76900, 124400,
  ],
});

export const mutations = {
  [playerDataMutations.OVERWRITE_PLAYER_DATA](state, payload) {
    state.player = payload;
  },
};
