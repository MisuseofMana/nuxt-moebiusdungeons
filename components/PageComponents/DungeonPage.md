# Dungeon Page Coding Guide

The highest complexity of the Dungeon Page is calculations for damage incoming, damage outgoing, and mechanics of the combat system. This includes the `six(6)` character stats and the combat calculations for damage output and damage nullification.

## Character Stats

There are `six(6)` secondary `stats` that govern combat during the dungeon phase along with the primary `three(3)` stats and your characters level, they are:

---

| `Primary Stats` | `Governs` |
| :--- | ---: |
| **Hit Points**: `HP`  | when this value is reduced to 0 you lose |
| **Attack**: `ATK`| your attack base, factors into Attack Calculation | 
| **Armor**: `ARM` | your armor, reduces incoming damage of a matching type |

| `Secondary Stats` | `Governs` |
| :--- | ------: |
| **Brawn**: `BRN` | *physical damage bonus and resistance to maladies* |
| **Speed**: `SPD` | *ability to escape combat, and opprotunity to attack first* |
| **Heart**: `HRT` | *maximum hit points and hit point regeneration when resting* |
| **Thought**: `THT` | *magical damage bonus and resistance to curses* |
| **Instinct**: `INS` | *item discovery and critical hit rate* |
| **Guile**: `GIL` | *shop prices and availability of legendary items* |

## Attack Damage Formula

There are two types of damage, physical and magical. Using the key above, the calculations for damage values are as follows:

> Math.ceil( `ATK` + `BRN` or `THT`) / (11 - `Level`)

### Damage Calculation

Let's say a character at `Level` 1 has physical type attack, using the following stats as an example (ATK: 10 | BRN: 10 | INS: 8) on the table below we see that the higher the characters `Level`, `BRN` or `THT`, and `ATK` the higher their damage output.

To understand the attack curve we need to know at every level up, a player may modify their stats by resting in `Eyien`. Every level you may distibute `eight(8)` points to any one stat or multiple stats. A player gains XP in a myriad of ways, defeating monsters, discovering locations, purchasing items, etc. Basically by playing the game longer you will gain XP which allows for stat increases and therefore higher damage output.

For the below example, let's assume that we increase only the `BRN` stat while leveling up. The potential damage increase is 

> All results are rounded up to the closest ceiling.

| `Level` | `ATK` | `BRN` or `THT` | Result |
| :--- | :--- | :--- | ---: |
| 1 | 10 | 10 | `2` |
| 2 | 10 | 18 | `4` |
| 3 | 10 | 26 | `5` |
| 4 | 10 | 34 | `3` |
| 5 | 10 | 42 | `3` |
| 6 | 10 | 50 | `3` |

`(10 + 10) / 8 - 1` = `20 / 10` = 2
36 / 8 = 5