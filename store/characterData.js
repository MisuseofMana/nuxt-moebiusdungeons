import characterDataMutations from "./characterDataMutations";

export const state = () => ({
  player: {
    class: "swordsman",
    special: "En'garde",
    specialDescription:
      "Spend one mettle to gain +1 Armor. The monster won’t attack you back when you use En'garde.",
    stats: {
      brawn: 11,
      speed: 7,
      heart: 12,
      thought: 5,
      instinct: 10,
      odyl: 5,
    },
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
    dungeonLogItems: [],
  },
  monster: {
    class: "bandits",
    attackType: "physical",
    maxAttack: 10,
    attack: 10,
    armorType: "physical",
    maxArmor: 3,
    armor: 3,
    maxHealth: 10,
    health: 10,
    maxMettle: 3,
    mettle: 3,
    curseEnergy: 0,
    level: 1,
    dungeonLogItems: [],
    stats: {
      brawn: 5,
      speed: 10,
      heart: 10,
      thought: 10,
      instinct: 10,
      odyl: 5,
    },
  },
  levelGoals: [
    0, 50, 100, 150, 250, 400, 650, 1050, 1700, 2750, 4500, 6800, 11300, 18100,
    29400, 47500, 76900, 124400,
  ],
});

export const mutations = {
  [characterDataMutations.OVERWRITE_PLAYER_DATA](state, payload) {
    state.player = payload;
  },
  [characterDataMutations.INCREASE_PLAYER_STAT](state, payload) {
    state.player[payload.stat] += payload.amount;
  },
  [characterDataMutations.DECREASE_PLAYER_STAT](state, payload) {
    state.player[payload.stat] -= payload.amount;
  },
  [characterDataMutations.ADD_TO_PLAYER_LOG](state, payload) {
    state.player.dungeonLogItems.unshift(payload);
  },
  [characterDataMutations.CLEAR_PLAYER_LOG](state) {
    state.player.dungeonLogItems = [];
  },
  [characterDataMutations.OVERWRITE_MONSTER_DATA](state, payload) {
    state.monster = payload;
  },
  [characterDataMutations.INCREASE_MONSTER_STAT](state, payload) {
    state.monster[payload.stat] += payload.amount;
  },
  [characterDataMutations.DECREASE_MONSTER_STAT](state, payload) {
    state.monster[payload.stat] -= payload.amount;
  },
  [characterDataMutations.ADD_TO_MONSTER_LOG](state, payload) {
    state.monster.dungeonLogItems.unshift(payload);
  },
  [characterDataMutations.CLEAR_MONSTER_LOG](state) {
    state.monster.dungeonLogItems = [];
  },
};
