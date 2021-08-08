export const state = () => ({
	characterJSON: [
		{
			name: 'body',
			sprites: {
				flat:[],
				flatImg:null,
				line:[],
				lineImg:null,
			},
			which: 0,
			top: 2,
			left: 0,
			rotation: 0,
			max: 10,
			lightness:0
		},
		{
			name:'eyes',
			sprites: {
				flat:[],
				flatImg:null,
				line:[],
				lineImg:null,
			},
			which: 0,
			max:32,
			lightness:0
		},
		{
			name:'brows',
			sprites: {
				flat:[],
				flatImg:null,
				line:[],
				lineImg:null,
			},
			which: 0,
			max:18,
			lightness:0
		},
		{
			name:'nose',
			sprites: {
				flat:[],
				flatImg:null,
				line:[],
				lineImg:null,
			},
			which: 0,
			max: 21,
			lightness:0
		},
		{
			name:'mouth',
			sprites: {
				flat:[],
				flatImg:null,
				line:[],
				lineImg:null,
			},
			which: 0,
			max: 23,
			lightness:0
		},
		{
			name:'ears',
			sprites: {
				flat:[],
				flatImg:null,
				line:[],
				lineImg:null,
			},
			which: 0,
			top: 2,
			left: 0,
			rotation: 0,
			max: 18,
			lightness:0
		},
		{
			name:'hair-front',
			sprites: {
				flat:[],
				flatImg:null,
				line:[],
				lineImg:null,
			},
			which: 0,
			top: 2,
			left: 0,
			rotation: 0,
			max: 20,
			lightness:0
		},
		{
			name:'hair-back',
			sprites: {
				flat:[],
				flatImg: null,
				line:[],
				lineImg: null,
			},
			which: 0,
			max: 17,
			lightness:0
		},
		{
			name: 'extras',
			sprites: {
				flat:[],
				flatImg:null,
				line:[],
				lineImg:null,
			},
			which: 0,
			max: 22,
			lightness:0,
		},
		{
			name:'clothes',
			sprites: {
				flat:[],
				flatImg:null,
				line:[],
				lineImg:null,
			},
			which: 0,
			max: 13,
			lightness:0
		},
	],
})
  
export const mutations = {
	POPULATE_SPRITE_ARRAY(state, payload) {
		state.characterJSON[payload.index].sprites[payload.arrayName] = payload.loadedPaths
	},
	INCREMENT_CHARACTER_OPTION(state, index) {
		state.characterJSON[index].which++
	},
	DECREMENT_CHARACTER_OPTION(state, index) {
		state.characterJSON[index].which--
	},
	SET_CHARACTER_OPTION(state, payload) {
		state.characterJSON[payload.index].which = payload.set
	}
}

export const actions = {
	characterOptionUp({state, commit}, index) {
		const itemObject = state.characterJSON[index]
    
		// if selection number is not max increase which
		if(itemObject.which < itemObject.max - 1) {
			commit('INCREMENT_CHARACTER_OPTION', index)
		}
		// otherwise set which to -1
		else {
			commit('SET_CHARACTER_OPTION', {index, set: -1})
		}
	},
	characterOptionDown({state, commit}, index) {
		const itemObject = state.characterJSON[index]

		// if selection number is not -1
		if (itemObject.which > -1) {
			commit('DECREMENT_CHARACTER_OPTION', index)
		}
		// otherwise set which to max
		else {
			commit('SET_CHARACTER_OPTION', {index, set: itemObject.max - 1})
		}
	}
}

export const getters = {
	character_selections(state) {
		let whiches = []
		state.characterJSON.forEach((item) => {
			whiches.push(item.which)
		})
		return whiches
	}
}