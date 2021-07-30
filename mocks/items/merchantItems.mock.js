export default {
	who: 'merchant',
	rations: {
		type:'instant', 
		bought: false, 
		noSale: false, 
		name: 'rations', 
		cost: 1, 
		description: '+5 HP', 
		effect: {action:'CHANGE_PLAYER_STATS',
			payload:[
				{stat:'baseHealth', value:5, operator:'add'},
			]},   
		iconPath: 'merchant/rations.png'
	},
	sewingKit:{
		type:'instant', 
		bought: false, 
		noSale: false, 
		name: 'sewing kit', 
		cost: 1, 
		description: '+1 ARM', 
		effect: {action:'CHANGE_PLAYER_STATS',
			payload:[
				{stat:'baseArmor', value:1, operator:'add'},
			]},  
		iconPath: 'merchant/sewingKit.png'
	},  
	mettlePoultice: {
		type:'instant', 
		bought: false, 
		noSale: false, 
		name: 'Mettle Poultice', 
		cost: 1, 
		description: '+3 ATK', 
		effect: {action:'CHANGE_PLAYER_STATS',
			payload:[
				{stat:'baseAttackMax', value:3, operator:'add'},
			]},  
		iconPath: 'merchant/poultice.png'
	},  
	quickMeal: {
		type:'instant', 
		bought: false, 
		noSale: false, 
		name: 'quick meal', 
		cost: 2, 
		description: '+12 HP',
		effect: {action:'CHANGE_PLAYER_STATS',
			payload:[
				{stat:'baseHealth', value:12, operator:'add'},
			]},  
		iconPath: 'merchant/mutton.png'
	},
	armorKit: {
		type:'instant', 
		bought: false, 
		noSale: false, 
		name: 'armor kit', 
		cost: 3, 
		description: '+2 ARM', 
		effect: {action:'CHANGE_PLAYER_STATS',
			payload:[
				{stat:'baseArmor', value:2, operator:'add'},
			]},  
		iconPath: 'merchant/armorKit.png'
	},
	mettleDraugt: {
		type:'instant', 
		bought: false, 
		noSale: false, 
		name: 'Mettle Draught', 
		cost: 2, 
		description: '+6 ATK', 
		effect: {action:'CHANGE_PLAYER_STATS',
			payload:[
				{stat:'baseAttackMax', value:6, operator:'add'},
			]},  
		iconPath: 'merchant/draught.png'
	},   
	kingsFeast:{
		type:'instant', 
		bought: false, 
		noSale: false, 
		name: 'king\'s feast', 
		cost: 3, description: '+18 HP', 
		effect: {action:'CHANGE_PLAYER_STATS',
			payload:[
				{stat:'baseHealth', value:18, operator:'add'},
			]},  
		iconPath: 'merchant/simpleMeal.png'
	},
	etchingRod: {
		type:'instant', 
		bought: false, 
		noSale: false, 
		name: 'etching rod', 
		cost: 5, description: '+3 ARM', 
		effect: {action:'CHANGE_PLAYER_STATS',
			payload:[
				{stat:'baseArmor', value:3, operator:'add'},
			]},  
		iconPath: 'merchant/etchingRod.png'
	},
	mettleVulnerary: {
		type:'instant', 
		bought: false, 
		noSale: false, 
		name: 'Mettle Vulnerary', 
		cost: 3, description: '+9 ATK', 
		effect: {action:'CHANGE_PLAYER_STATS',
			payload:[
				{stat:'baseAttackMax', value:4, operator:'add'},
			]}, 
		iconPath: 'merchant/vulnary.png'
	},

}