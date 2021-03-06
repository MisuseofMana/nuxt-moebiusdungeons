export default {
	who: 'cleric',
	minorHeal: {
		name: 'minor heal', 
		type: 'instant', 
		bought: false,
		cost: 1, 
		description: '+5 HP', 
		effect: {action:'CHANGE_PLAYER_STATS', payload:[{stat:'baseHealth', value:5, operator: 'add'}]},
		iconPath: 'cleric/heal1.png'
	},    
	minorBlessing: { 
		name: 'minor blessing', 
		type: 'instant', 
		bought: false, 
		cost: 1, 
		description: '+1 ARM', 
		effect: {action:'CHANGE_PLAYER_STATS', payload:[{stat:'baseArmor', value:1, operator: 'add'}]},
		iconPath: 'cleric/boon.png'
	},
	fortune: {
		name: 'fortune', 
		type: 'temporary', 
		bought: false,
		cost: 2, 
		description: 'doubles coin value of next monster', 
		effect: {action:'CHANGE_MONSTER_STATS', payload:[{stat:'coins', value:2, length:1, operator:'multiply'}]},
		iconPath: 'cleric/fortune.png'
	},
	greaterHeal: {
		name: 'greater heal', 
		type: 'instant', 
		bought: false, 
		cost: 2, 
		description: '+12 HP', 
		effect: {action:'CHANGE_PLAYER_STATS', payload:[{stat:'baseHealth', value:12, operator:'add'}]},
		iconPath: 'cleric/heal2.png'
	},
	favorOfAmara: {
		name: 'favor of amara', 
		type: 'instant', 
		bought: false, 
		cost: 5, 
		description: '+10 HP +5 ATK', 
		effect: {action:'CHANGE_PLAYER_STATS', 
			payload:[
				{stat:'baseHealth', value:10, operator:'add'},
				{stat:'baseAttackMax', value:5, operator:'add'}
			]},
		iconPath: 'cleric/immune2.png'
	},
	emberShield: {
		name: 'Ember Shield', 
		type: 'instant', 
		bought: false, 
		cost: 5, 
		description: '+5 ARM +10 HP', 
		effect: {action:'CHANGE_PLAYER_STATS', 
			payload:[
				{stat:'baseHealth', value:10, operator:'add'},
				{stat:'baseAttackMax', value:5, operator:'add'}
			]},
		iconPath: 'cleric/boon.png'
	},
	greatBlessing: {
		name: 'great blessing', 
		type: 'instant', 
		bought: false, 
		cost: 2, 
		description: '+3 ARM', 
		effect: {action:'CHANGE_PLAYER_STATS', payload:[{stat:'baseArmor', value:3, operator:'add'}]},
		iconPath: 'cleric/boonGold.png'
	},
	greatMiracle: {
		name: 'great miracle', 
		type: 'instant', 
		bought: false, 
		cost: 3, 
		description: '+5 ATK',
		effect: {action:'CHANGE_PLAYER_STATS', payload:[{stat:'baseAttackMax', value:5, operator:'add'}]},
		iconPath: 'cleric/boostAttack.png'
	},
	boon: {
		name: 'boon', 
		type: 'temporary', 
		bought: false, 
		cost: 3, 
		description: 'Immune to damage once', 
		effect: {action:'ADD_TO_INVENTORY', payload: {ability:'immune', length:1, shine:'greenShine'}},
		iconPath: 'cleric/immune2.png'
	}
}