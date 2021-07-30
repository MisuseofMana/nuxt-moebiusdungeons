export default {
	who:'graveRobbber',
	nacreCharm: {
		type: 'instant', 
		bought: false, 
		noSale: false, 
		name: 'nacre charm', 
		cost: 1,
		description: '+1 ATK | +1 ARM | -5 HP', 
		effect: {action:'CHANGE_PLAYER_STATS',
			payload:[
				{stat:'baseAttackMax', value:1, operator:'add'},
				{stat:'baseArmor', value:1, operator:'add'},
				{stat:'baseHealth', value:5, operator:'minus'},
				{stat:'curse', value:0.15, operator:'add'},
			]}, 
		iconPath: 'graverobber/nacreCharm.png'
	},
	detrimentBangle: { 
		type: 'instant', 
		bought: false, 
		noSale: false, 
		name: 'detriment bangle', 
		cost: 1, 
		description: 'Halves your HP | +3 ARM', 
		effect: {action:'CHANGE_PLAYER_STATS',
			payload:[
				{stat:'baseArmor', value:3, operator:'add'},
				{stat:'baseHealth', value:2, operator:'divide'},
				{stat:'curse', value:0.25, operator:'add'},
			]}, 
		iconPath: 'graverobber/detrimentBangle.png' 
	},
	unluckyTrinket:{ 
		type: 'instant', 
		bought: false, 
		noSale: false, 
		name: 'unlucky trinket', 
		cost: 3, 
		description: '+4 ATK | -2 ARM', 
		effect: {action:'CHANGE_PLAYER_STATS',
			payload:[
				{stat:'baseAttackMax', value:4, operator:'add'},
				{stat:'baseArmor', value:2, operator:'minus'},
				{stat:'curse', value:0.25, operator:'add'},
			]},  
		iconPath: 'graverobber/unluckyTrinket.png' 
	},
	hollowBone:{ 
		type: 'temporary', 
		bought: false, 
		noSale: false, 
		name: 'hollow bone', 
		cost: 2, 
		description: '+4 ATK for next battle', 
		effect: {action:'ADD_TO_INVENTORY',
			payload:{stat:'tempAttackMax', value:4, operator:'add', length:1, shine:'redShine'}}, 
		iconPath: 'graverobber/hollowBone.png' 
	},
	demonRing:{ 
		type: 'permanent', 
		bought: false, 
		noSale: false, 
		name: 'Demon Ring', 
		cost: 4, 
		description: 'Halves your ARM | x2 ATK', 
		effect: {action:'CHANGE_PLAYER_STATS',
			payload:[
				{stat:'baseAttackMax', value:2, operator:'multiply'},
				{stat:'baseArmor', value:2, operator:'divide'},
			]}, 
		iconPath: 'graverobber/demonRing.png'
	},
	dessicatedDoll:{ 
		type: 'temporary', 
		bought: false, 
		noSale: false, 
		name: 'Dessicated Doll', 
		cost: 5, 
		description: 'Revive with 10 HP on death.', 
		effect: {action:'ADD_TO_INVENTORY', payload: {ability:'revive', length:-1, shine:'goldShine'}}, 
		iconPath: 'graverobber/dessicatedDoll.png'
	},
}