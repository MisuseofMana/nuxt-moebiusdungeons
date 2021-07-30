export default {
	who:'witch',
	weakEnchantment: { 
		type:'instant', 
		bought: false, 
		noSale: false, 
		name: 'weak enchantment', 
		cost: 1, 
		description: '+2 ATK', 
		effect: {action:'CHANGE_PLAYER_STATS',
			payload:[
				{stat:'baseAttackMax', value:2, operator:'add'},
			]},
		iconPath: 'witch/weakEnchantment.png'
	},
	redPotion:{ 
		type:'instant', 
		bought: false, 
		noSale: false, 
		name: 'red potion', 
		cost: 1, 
		description: '+6 HP', 
		effect: {action:'CHANGE_PLAYER_STATS',
			payload:[
				{stat:'baseHealth', value:6, operator:'add'},
			]},  
		iconPath: 'witch/redPotion.png'
	},
	bandedCharm:{ 
		type:'instant', 
		bought: false, 
		noSale: false, 
		name: 'banded charm', 
		cost: 1, 
		description: '+1 ATK | +1 ARM', 
		effect: {action:'CHANGE_PLAYER_STATS',
			payload:[
				{stat:'baseAttackMax', value:1, operator:'add'},
				{stat:'baseArmor', value:1, operator:'add'},
			]},
		iconPath: 'witch/bandedCharm.png'
	},
          
	arcaneBinding:{ 
		type:'instant', 
		bought: false, 
		noSale: false, 
		name: 'arcane binding', 
		cost: 2, 
		description: '+3 ATK | +1 ARM', 
		effect: {action:'CHANGE_PLAYER_STATS',
			payload:[
				{stat:'baseAttackMax', value:3, operator:'add'},
				{stat:'baseArmor', value:1, operator:'add'},
			]}, 
		iconPath: 'witch/arcaneBinding.png'
	},

	ochreElixer: { 
		type:'instant', 
		bought: false, 
		noSale: false, 
		name: 'ochre elixir', 
		cost: 2, 
		description: '+6 HP | +1 ATK', 
		effect: {action:'CHANGE_PLAYER_STATS',
			payload:[
				{stat:'baseHealth', value:6, operator:'add'},
				{stat:'baseAttackMax', value:1, operator:'add'},
			]},
		iconPath: 'witch/ochrePotion.png'
	},

	mettleEarring: { 
		type:'instant', 
		bought: false, 
		noSale: false, 
		name: 'mettle earring', 
		cost: 2, 
		description: '+1 ARM | +1 ATK | +6 HP', 
		effect: {action:'CHANGE_PLAYER_STATS',
			payload:[
				{stat:'baseArmor', value:1, operator:'add'},
				{stat:'baseAttackMax', value:1, operator:'add'},
				{stat:'baseHealth', value:6, operator:'add'},
			]}, 
		iconPath: 'witch/mettleEarring.png'
	},
          
	ancientRune: { 
		type:'instant', 
		bought: false, 
		noSale: false, 
		name: 'ancient rune', 
		cost: 3, 
		description: '+3 ATK | +2 ARM', 
		effect: {action:'CHANGE_PLAYER_STATS',
			payload:[
				{stat:'baseAttackMax', value:3, operator:'add'},
				{stat:'baseArmor', value:2, operator:'add'},
			]}, 
		iconPath: 'witch/ancientRune.png'
	},

	specialDrink:{ 
		type:'instant', 
		bought: false, 
		noSale: false, 
		name: 'special drink', 
		cost: 3, 
		description: '+10 HP | +2 ATK', 
		effect: {action:'CHANGE_PLAYER_STATS',
			payload:[
				{stat:'baseAttackMax', value:2, operator:'add'},
				{stat:'baseHealth', value:10, operator:'add'},
			]}, 
		iconPath: 'witch/specialDrink.png'
	},

	mettleNecklace:{ 
		type:'instant', 
		bought: false, 
		noSale: false, 
		name: 'mettle necklace', 
		cost: 3, 
		description: '+1 ARM | +3 ATK | +8 HP', 
		effect: {action:'CHANGE_PLAYER_STATS',
			payload:[
				{stat:'baseArmor', value:1, operator:'add'},
				{stat:'baseAttackMax', value:3, operator:'add'},
				{stat:'baseHealth', value:8, operator:'add'},
			]},
		iconPath: 'witch/mettleNecklace.png'
	},
          
	//NEEDS A NEW ACTION
	bloodRitual: { 
		type: 'instant', 
		bought: false, 
		noSale: false, 
		name: 'blood ritual', 
		cost: 5, 
		description: 'Thirds your HP | + lost HP to your ATK', 
		effect: {action:'TRANSFER_PLAYER_STAT',
			payload:{
				fromStat:'baseHealth', toStat:'baseAttackMax', value:3, operator:'divide'},
		},
		iconPath: 'witch/bloodRitual.png'
	},
}