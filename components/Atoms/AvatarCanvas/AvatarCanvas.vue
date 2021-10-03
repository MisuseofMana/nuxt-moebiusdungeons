<template>
    <v-sheet elevation="2" rounded :min-width="canvasSize" :min-height="canvasSize" :max-height="canvasSize" :max-width="canvasSize">
         <canvas id="canvas" class="mb-3 border" :width="canvasSize" :height="canvasSize"></canvas>
         <canvas id="stageCanvas" class="d-none" :width="canvasSize" :height="canvasSize" ></canvas>
    </v-sheet>
</template>

<script>
import presets from '@/assets/avatarPresets/preset.js'
import { mapState, mapMutations, mapGetters } from 'vuex'

export default {
	name: 'AvatarCanvas',
	props: {
		canvasSize: {
			type: Number,
			default:500,
		}
	},
	data() {
		return {
			presets,
			imagesToLoad:0,
			characterBuilder: [],
			renderOrder: [
				'hair-back',
				'body',
				'eyes',
				'nose',
				'mouth',
				'ears',
				'brows',
				'extras',
				'hair-front',
				'clothes',
			]
		}
	},
	computed: {
		...mapState('avatarCanvas', [
			'characterJSON'
		]),
		...mapGetters('avatarCanvas', [
			'character_selections'
		]),
		canvas () {
			return document.getElementById('canvas')
		},
		ctx () {
			return this.canvas.getContext('2d')
		},
		stageCanvas () {
			return document.getElementById('stageCanvas')
		},
		stagectx () {
			return this.stageCanvas.getContext('2d')
		},
	},
	watch: {
		characterJSON: {
			handler() {
				this.init()
			},
			deep: true,
		}
	},
	methods:{
		...mapMutations('avatarCanvas', [
			'REPLACE_CHARACTER_JSON',
			'POPULATE_SPRITE_ARRAY',
		]),
		init() {
			// declare variables
			this.imagesToLoad = 0
			var img

			// loop through characterJSON data
			for(let selection in this.characterJSON){
				// if 
				if (selection.which === -1){
					this.imagesToLoad += 2
				}
			}
			// the empty array to build the character
			this.characterBuilder = []

			this.renderOrder.forEach((selection, index) => {
				// set characterBuilder data for item in render order in array
				this.characterBuilder[index] = {name: selection, flatImg: null, lineImg: null}
				// get index in JSON of sprite being rendered
				const jsonIndex = this.characterJSON.findIndex(sprite => sprite.name === selection)
				const spriteJSON = this.characterJSON[jsonIndex]
				const which = spriteJSON.which
				
				// get sprite names from JSON
				const flat = spriteJSON.sprites.flat[which]
				const line = spriteJSON.sprites.line[which] 

				// if sprite is selected
				if(which > -1){
					for(let i = 0; i < 2; i++){
						// set sources
						let sources = [flat, line]
						let targets = ['flatImg', 'lineImg']

						// new image at 500, 500
						img = new Image(500, 500)

						// set character builder at index to new image
						this.characterBuilder[index][targets[i]] = img
						img.onload = () => {
							// when all images are loaded render character
							this.imagesToLoad--
							if (this.imagesToLoad <= 0) {
								this.renderCharacter()
							}
						}
						img.onerror = () => {
							console.log('error loading image')
						}
						try {
							img.src = require(`@/assets/images/avatarSprites/${sources[i]}`)
						} catch {
							this.imagesToLoad--
							this.characterBuilder[index][targets[i]] = null
						}
					}
				}
			})
		},
		clearCanvas(context) {
			context.forEach((item) => {
				item.clearRect(0,0,this.canvasSize,this.canvasSize) // clear the staging canvas
			})
		},
		drawRectangle(context) {
			context.canvas.fillRect(0, 0, this.canvasSize, this.canvasSize)
		},
		drawImage(context) {
			context.canvas.drawImage(context.image, 0, 0, this.canvasSize, this.canvasSize)
		},
		setCompositeOperation(context) {
			context.canvas.globalCompositeOperation = context.comp
		},
		renderCharacter(){
			this.clearCanvas([this.ctx, this.stagectx]) 
			for(let current of this.characterBuilder) { //loop through all options in characterBuilder
				
				if(current.flatImg){
					const image = current.flatImg
             
					// set source, draw flat image
					this.setCompositeOperation({canvas: this.stagectx, comp: 'source-over'})
					this.drawImage({canvas: this.stagectx, image})
					
					const skinSprites = ['body', 'ears', 'nose']
					const hairSprites = ['hair-front', 'hair-back', 'brows']
					const clothesSprites = ['clothes']

					const toneList = [...skinSprites, ...hairSprites, ...clothesSprites]

					if(toneList.includes(current.name)) {
						let toneTarget
						if(skinSprites.includes(current.name)) toneTarget = 0
						if(hairSprites.includes(current.name)) toneTarget = 1
						if(clothesSprites.includes(current.name)) toneTarget = 2

						let tone = this.characterJSON[toneTarget].which === 0 ? 30 : this.characterJSON[toneTarget].which * 10 + 30
						
						// set mode, set composite mode
						let mode = tone <= 60 ? 'darken' : 'lighten' 
						this.setCompositeOperation({canvas: this.stagectx, comp: mode})

						// set lightness/darkness fill style
						this.stagectx.fillStyle = `hsl(0, 0%, ${tone}%)`
						this.drawRectangle({canvas: this.stagectx})
					}
					
					this.setCompositeOperation({canvas: this.stagectx, comp: 'destination-in'})
					this.drawImage({canvas: this.stagectx, image})
				}
    
				if(current.lineImg) {
					const image = current.lineImg
					this.setCompositeOperation({canvas: this.stagectx, comp: 'source-over'})
					this.drawImage({canvas: this.stagectx, image})
				}

				this.stagectx.restore()
        
				if(current.flatImg || current.lineImg) {
					this.setCompositeOperation({canvas: this.ctx, comp: 'source-over'})
					this.drawImage({canvas: this.ctx, image: this.stageCanvas})
				}
			}
		},
		randomNumber(min,max){
			return Math.floor(Math.random() * (max - min + 1) + min)
		},
	},
	mounted(){
		//add snipped image paths to appropriate arrays in the characterJSON array
		this.characterJSON.forEach((selection, index) => { // for every object in the array
			for (let array in selection.sprites) {
				let count = selection.max // maximum count of sprites
				let into = [] 
				for(let image = 1; image <= count; image++){
					if(selection.sprites[array] !== null){ 
						into.push(`${selection.name}/${array}/${image}.png`)
						this.imgsToLoad++
					}
				}
				this.POPULATE_SPRITE_ARRAY({ index: index, arrayName: array, loadedPaths: into})
			}
		})
		this.init()
	}
}
</script>