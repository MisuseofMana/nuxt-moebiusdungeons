export const state = () => ({
	characterJSON: [
		{
			name: 'skin-tone',
			render: false,
			which:3,
			max:5,
		},
		{
			name: 'hair-tone',
			render: false,
			which:2,
			max:9,
		},
		{
			name: 'clothes-tone',
			render: false,
			which:3,
			max:9,
		},
		{
			name: 'body',
			render: true,
			sprites: {
				flat:[],
				flatImg:null,
				line:[],
				lineImg:null,
			},
			which: 0,
			max: 10,
		},
		{
			name:'eyes',
			render: true,
			sprites: {
				flat:[],
				flatImg:null,
				line:[],
				lineImg:null,
			},
			which: 0,
			max:32,
		},
		{
			name:'brows',
			render: true,
			sprites: {
				flat:[],
				flatImg:null,
				line:[],
				lineImg:null,
			},
			which: 0,
			max:18,
		},
		{
			name:'nose',
			render: true,
			sprites: {
				flat:[],
				flatImg:null,
				line:[],
				lineImg:null,
			},
			which: 0,
			max: 21,
		},
		{
			name:'mouth',
			render: true,
			sprites: {
				flat:[],
				flatImg:null,
				line:[],
				lineImg:null,
			},
			which: 0,
			max: 23,
		},
		{
			name:'ears',
			render: true,
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
		},
		{
			name:'hair-front',
			render: true,
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
		},
		{
			name:'hair-back',
			render: true,
			sprites: {
				flat:[],
				flatImg: null,
				line:[],
				lineImg: null,
			},
			which: 0,
			max: 17,
		},
		{
			name: 'extras',
			render: true,
			sprites: {
				flat:[],
				flatImg:null,
				line:[],
				lineImg:null,
			},
			which: 0,
			max: 22,
		},
		{
			name:'clothes',
			render: true,
			sprites: {
				flat:[],
				flatImg:null,
				line:[],
				lineImg:null,
			},
			which: 0,
			max: 13,
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
			commit('SET_CHARACTER_OPTION', {index, set: 0})
		}
	},
	characterOptionDown({state, commit}, index) {
		const itemObject = state.characterJSON[index]

		// if selection number is not -1
		if (itemObject.which > 0) {
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