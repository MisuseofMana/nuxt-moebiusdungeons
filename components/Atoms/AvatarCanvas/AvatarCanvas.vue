<template>
    <v-card min-width="500" min-height="500" max-height="500" max-width="500">
         <canvas id="canvas" class="mb-3 border" width="500" height="500"></canvas>
         <canvas class="d-none" width="500" height="500" id="stageCanvas"></canvas>
    </v-card>
</template>

<script>
import presets from '@/assets/avatarPresets/preset.js'
import { mapState, mapMutations } from 'vuex'

    export default {
        name: 'AvatarCanvas',
        data() {
    return {
      presets,
      imagesToLoad:0,
      characterBuilder: []
    }
  },
  computed: {
    ...mapState('avatarCanvas', [
      'characterJSON'
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
        this.characterJSON.forEach((selection, index) => {
          this.characterBuilder.push({})
          if(selection.which > -1){

              for(let i = 0; i < 2; i++){
                let sources = [selection.sprites.flat[selection.which], selection.sprites.line[selection.which]];
                let targets = ['flatImg', 'lineImg'];
                img = new Image(500,500);
                this.characterBuilder[index][targets[i]] = img
                img.onload = () => {
                  this.imagesToLoad--;
                  if (this.imagesToLoad <= 0) {
                    this.drawImages();
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
    drawImages(){
      this.ctx.clearRect(0,0,500,500) //clear the display canvas
      this.stagectx.clearRect(0,0,500,500) //clear the staging canvas
      console.log(this.characterBuilder)

      for(let current of this.characterBuilder) { //loop through all characterJSON  
      console.log(current)               
            if(current.flatImg){

              this.stagectx.globalCompositeOperation = "source-over";
              this.stagectx.drawImage(current.flatImg, 0, 0, 500, 500, 0, 0, 500, 500);

              let mode = current.lightness <= 50 ? 'darken' : 'lighten' 
              this.stagectx.globalCompositeOperation = mode;
              this.stagectx.fillStyle = `hsl(0, 0%, ${current.lightness}%)`;
              this.stagectx.fillRect(0, 0, 500, 500);
              
              this.stagectx.globalCompositeOperation = "destination-in";
              this.stagectx.drawImage(current.flatImg, 0, 0, 500, 500, 0, 0, 500, 500);
            }
    
            if(current.lineImg) {
              this.stagectx.globalCompositeOperation = "source-over";
              this.stagectx.drawImage(current.lineImg, 0, 0, 500, 500, 0, 0, 500, 500);
            }
    
            this.stagectx.restore();
          
        this.ctx.globalCompositeOperation = "source-over";
        this.ctx.drawImage(this.stageCanvas, 0, 0, 500, 500, 0, 0, 500, 500);
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
    this.init();
  }
    }
</script>