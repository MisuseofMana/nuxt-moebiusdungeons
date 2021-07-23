<template>
    <v-card :min-width="canvasSize" :min-height="canvasSize" :max-height="canvasSize" :max-width="canvasSize">
         <canvas id="canvas" class="mb-3 border" :width="canvasSize" :height="canvasSize"></canvas>
         <canvas class="d-none" :width="canvasSize" :height="canvasSize" id="stageCanvas"></canvas>
    </v-card>
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
        'hair-front',
        'extras',
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
      return document.getElementById('canvas');
    },
    ctx () {
      return this.canvas.getContext('2d');
    },
    stageCanvas () {
      return document.getElementById('stageCanvas')
    },
    stagectx () {
      return this.stageCanvas.getContext('2d');
    },
  },
  watch: {
      character_selections(oldValue, newValue) {
        this.init()
      }
    },
  methods:{
    ...mapMutations('avatarCanvas', [
      'REPLACE_CHARACTER_JSON',
      'POPULATE_SPRITE_ARRAY',
    ]),
    init() {
      this.imagesToLoad = 0;
      var img;
        for(let selection in this.characterJSON){
          if (selection.which === -1){
            this.imagesToLoad += 2
          }
        }
        this.characterBuilder = []
        this.renderOrder.forEach((selection, index) => {
          this.characterBuilder[index] = {name: selection, flatImg: null, lineImg: null}
          const jsonIndex = this.characterJSON.findIndex(char => char.name === selection)
          const character = this.characterJSON[jsonIndex]
          const which = character.which
          let flat = character.sprites.flat[which]
          const line = character.sprites.line[which] 

          if(character.which > -1){
              for(let i = 0; i < 2; i++){
                let sources = [flat, line];
                let targets = ['flatImg', 'lineImg'];
                img = new Image(1000, 1000);
                this.characterBuilder[index][targets[i]] = img
                img.onload = () => {
                  this.imagesToLoad--;
                  if (this.imagesToLoad <= 0) {
                    this.renderCharacter();
                  }
                }
                img.onerror = () => {
                  console.log('error loading image')
                }
                try {
                  img.src = require(`@/assets/images/avatarSprites/${sources[i]}`);
                } catch {
                  this.imagesToLoad--;
                  this.characterBuilder[index][targets[i]] = null
                }
          }
        }
      })
    },
    clearCanvas(context) {
      context.forEach((item) => {
        item.clearRect(0,0,this.canvasSize,this.canvasSize) //clear the staging canvas
      })
    },
    drawRectangle(context) {
      context.canvas.fillRect(0, 0, this.canvasSize, this.canvasSize);
    },
    drawImage(context) {
      context.canvas.drawImage(context.image, 0, 0, this.canvasSize, this.canvasSize);
    },
    setCompositeOperation(context) {
       context.canvas.globalCompositeOperation = context.comp;
    },
    renderCharacter(){
      this.clearCanvas([this.ctx, this.stagectx]) 
      for(let current of this.characterBuilder) { //loop through all options in characterBuilder
            if(current.flatImg){
              const image = current.flatImg
             
              // set source, draw flat image
              this.setCompositeOperation({canvas: this.stagectx, comp: 'source-over'})
              this.drawImage({canvas: this.stagectx, image})

              // set mode, set composite mode
              // let mode = current.lightness <= 50 ? 'darken' : 'lighten' 
              // this.setCompositeOperation({canvas: this.stagectx, comp: mode})

              // set lightness/darkness fill style
              // this.stagectx.fillStyle = `hsl(0, 0%, ${current.lightness}%)`;
              // this.drawRectangle({canvas: this.stagectx})
              
              this.setCompositeOperation({canvas: this.stagectx, comp: 'destination-in'})
              this.drawImage({canvas: this.stagectx, image})
            }
    
            if(current.lineImg) {
              const image = current.lineImg
              this.setCompositeOperation({canvas: this.stagectx, comp: 'source-over'})
              this.drawImage({canvas: this.stagectx, image})
            }

            this.stagectx.restore();
        
        if(current.flatImg || current.lineImg) {
          this.setCompositeOperation({canvas: this.ctx, comp: 'source-over'})
          this.drawImage({canvas: this.ctx, image: this.stageCanvas})
        }
      }
    },
    randomNumber(min,max){
      return Math.floor(Math.random() * (max - min + 1) + min);
    },
  },
  mounted(){
    let randomPreset = this.presets[this.randomNumber(0, this.presets.length - 1 )]
    this.REPLACE_CHARACTER_JSON(randomPreset)

    //add snipped image paths to appropriate arrays in the characterJSON array
    this.characterJSON.forEach((selection, index) => { // for every object in the array
      for (let array in selection.sprites) {
        let count = selection.max // maximum count of sprites
        let into = []; 
        for(let image = 1; image <= count; image++){
          if(selection.sprites[array] !== null){ 
            into.push(`${selection.name}/${array}/${image}.png`);
            this.imgsToLoad++;
          }
        }
        this.POPULATE_SPRITE_ARRAY({ index: index, arrayName: array, loadedPaths: into})
      }
    })
    this.init()
  }
    }
</script>