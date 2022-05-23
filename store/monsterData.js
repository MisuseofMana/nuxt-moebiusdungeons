import monsterDataMutations from "./monsterDataMutations";

export const state = () => ({
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
  },
  dungeonLogItems: [],
});

export const mutations = {
  [monsterDataMutations.OVERWRITE_MONSTER_DATA](state, payload) {
    state.monster = payload;
  },
  [monsterDataMutations.INCREASE_MONSTER_STAT](state, payload) {
    state.monster[payload.stat] += payload.amount;
  },
  [monsterDataMutations.DECREASE_MONSTER_STAT](state, payload) {
    state.monster[payload.stat] -= payload.amount;
  },
};
