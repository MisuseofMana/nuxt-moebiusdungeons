<template>
    <v-card min-width="500" min-height="500" max-height="500" max-width="500">
         <canvas id="canvas" class="mb-3 border" width="500" height="500"></canvas>
         <canvas class="d-none" width="500" height="500" id="stageCanvas"></canvas>
    </v-card>
</template>

<script>
import presets from '@/assets/avatarPresets/preset.js'
import { mapState, mapMutations, mapGetters } from 'vuex'

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
    ...mapGetters('avatarCanvas', [
      'characterJSONClone'
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
    activeIndex () {
      const findActive = (item) => item.name === this.active;
      return this.selections.findIndex(findActive);
    },
  },
  methods:{
    ...mapMutations('avatarCanvas', [
      'REPLACE_CHARACTER_JSON',
      'POPULATE_SPRITE_ARRAY',
      'SET_SPRITE_IMAGE'
    ]),
    setActive(e){
      this.active = e;
    },
    init() {
      this.loading = true;
      this.imagesToLoad = 0;
      var img;
        for(let selection in this.characterJSON){
          if (this.characterJSON.which === -1){
            this.imagesToLoad += 2
          }
        }

        // REORGANIZE to use local state for image loading and rendering
        this.characterJSON.forEach((selection, index) => {
          if(selection.which !== -1){
              for(let i = 0; i < 2; i++){
                let sources = [selection.sprites.flat[selection.which], selection.sprites.line[selection.which]];
                let targets = ['flatImg', 'lineImg'];
                img = new Image(500,500);
                this.SET_SPRITE_IMAGE({ index, target: targets[i], img})
                img.onload = () => {
                  this.imagesToLoad--;
                  if (this.imagesToLoad <= 0) {
                    this.loading = false;
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
                  this.SET_SPRITE_IMAGE({ index, target: targets[i], img: null})

                }
          }
        }
      })
    },
    drawImages(){
      this.ctx.clearRect(0,0,500,500) //clear the display canvas
      this.stagectx.clearRect(0,0,500,500) //clear the staging canvas

      for(let selection in this.characterJSON) { //loop through all characterJSON
        let current = this.characterJSON[selection]; //set current variable
        
        if(current.disable === true) { /*draw nothing if the option is disabled*/ }
          else {          
            if(current.sprites.flatImg && current.color === true){

              this.stagectx.globalCompositeOperation = "source-over";
              this.stagectx.drawImage(current.sprites.flatImg, 0, 0, 500, 500, 0, 0, 500, 500);

              let mode = current.lightness <= 50 ? 'darken' : 'lighten' 
              this.stagectx.globalCompositeOperation = mode;
              this.stagectx.fillStyle = `hsl(0, 0%, ${current.lightness}%)`;
              this.stagectx.fillRect(0, 0, 500, 500);
              
              this.stagectx.globalCompositeOperation = "destination-in";
              this.stagectx.drawImage(current.sprites.flatImg, 0, 0, 500, 500, 0, 0, 500, 500);
            }

            else if(current.sprites.flatImg && current.color !== true){
              this.stagectx.globalCompositeOperation = "source-over";
              this.stagectx.drawImage(current.sprites.flatImg, 0, 0, 500, 500, 0, 0, 500, 500);
            }
    
            if(current.sprites.lineImg) {
              this.stagectx.globalCompositeOperation = "source-over";
              this.stagectx.drawImage(current.sprites.lineImg, 0, 0, 500, 500, 0, 0, 500, 500);
            }
    
            this.stagectx.restore();
          }
        this.ctx.globalCompositeOperation = "source-over";
        this.ctx.drawImage(this.stageCanvas, 0, 0, 500, 500, 0, 0, 500, 500);
      } //End for loop
    },
    randomItem(){
      let randomPick = Math.floor(Math.random() * this.characterJSON[this.activeIndex].max);
      this.characterJSON[this.activeIndex].which = randomPick;
      this.characterJSON[this.activeIndex].disable = false;
      this.init();
    },
    colorMatch() {
      let matchHue = this.characterJSON[this.activeIndex].hue
      let matchSat = this.characterJSON[this.activeIndex].saturation
      let matchLight = this.characterJSON[this.activeIndex].lightness
      let options = this.characterJSON;
      let currentSelected = this.characterJSON[this.activeIndex].name

      const skin = ['body', 'ears', 'nose', 'mouth'];
      const hair = ['hair-front', 'hair-back', 'brows'];
      const extra = ['clothes', 'extras'];

        for(let item of options){
          if(skin.includes(currentSelected) && skin.includes(item.name)){
            this.assignHSL([matchHue, matchSat, matchLight], item);
          }
          if(hair.includes(currentSelected) && hair.includes(item.name)){
            this.assignHSL([matchHue, matchSat, matchLight], item);
          }
          if(extra.includes(currentSelected) && extra.includes(item.name)){
            this.assignHSL([matchHue, matchSat, matchLight], item);
          }
        }
      this.init()
    },
    randomNumber(min,max){
      return Math.floor(Math.random() * (max - min + 1) + min);
    },
    randomize() {
      for(let selection of this.characterJSON){
        selection.color = true
        selection.hue = this.randomNumber(0, 359)
        selection.saturation = this.randomNumber(0,100)
        selection.lightness = this.randomNumber(15,100)
        
        selection.which = this.randomNumber(1,selection.max-1);
        selection.disable = false;
      }
        this.init()
    },
    randomActiveColor() {
       let selection = this.characterJSON[this.activeIndex]
      selection.color = true
      selection.hue = this.randomNumber(0, 359)
      selection.saturation = this.randomNumber(0,100)
      selection.lightness = this.randomNumber(15,100)
      this.init()
    },
    setLightness(e){
      this.characterJSON[this.activeIndex].color = true
      this.characterJSON[this.activeIndex].lightness = e
      this.addNewColor()
      this.init()
    },
    resetColor() {
      this.characterJSON[this.activeIndex].color = false
      this.characterJSON[this.activeIndex].hue = 0
      this.characterJSON[this.activeIndex].saturation = 0
      this.characterJSON[this.activeIndex].lightness = 50
      this.init()
    },
    reRollColors(e) {
      const skin = [this.randomNumber(1,50), this.randomNumber(15,55), this.randomNumber(50,95)];
      const hair = [this.randomNumber(0,360), this.randomNumber(0,100), this.randomNumber(50,100)]
      const garb = [this.randomNumber(0,360), this.randomNumber(0,50), this.randomNumber(50,75)]

      for(let selection of this.characterJSON){
        if(e === 'fullRandom'){
          selection.which = this.randomNumber(1,selection.max-1)
          selection.left = 0;
          selection.top = 0;
          selection.rotation = 0;
          selection.scaleWidth = 500;
          selection.scaleHeight = 500;
        }

        switch (selection.name) {
          case 'body':
          case 'ears':
          case 'nose':
            this.assignHSL(skin, selection)
            break;
          case 'hair-front':
          case 'hair-back':
          case 'brows':
          case 'mouth':
            this.assignHSL(hair, selection)
            break;
          case 'clothes':
          case 'extra':
            this.assignHSL(garb, selection)
            break;
          default:
            selection.color = false;
        }
    }
        this.init();
    },
    reRollFeatures(){
      for(let selection of this.characterJSON){
        selection.which = this.randomNumber(1,selection.max-1)
        selection.left = 0;
        selection.top = 0;
        selection.rotation = 0;
        selection.scaleWidth = 500;
        selection.scaleHeight = 500;
      }
      this.init()
    },
    resetActive(){
      this.characterJSON[this.activeIndex].left = 0;
      this.characterJSON[this.activeIndex].top = 0;
      this.characterJSON[this.activeIndex].color = false;
      this.characterJSON[this.activeIndex].lightness = 0;
      this.characterJSON[this.activeIndex].rotation = 0;
      this.characterJSON[this.activeIndex].scaleWidth = 500;
      this.characterJSON[this.activeIndex].scaleHeight = 500;
      this.characterJSON[this.activeIndex].disable = false;
      this.init();
    },
    resetAll(){
      for(let selection of this.characterJSON){
        selection.left = 0;
        selection.top = 0;
        selection.lightness = 0;
        selection.rotation = 0;
        selection.scaleWidth = 500;
        selection.scaleHeight = 500;
        selection.disable = false;
      }
      this.init();
    },
  },
  mounted(){
    // let randomPreset = this.presets[this.randomNumber(0, this.presets.length - 1 )]
    // this.REPLACE_CHARACTER_JSON(randomPreset)

    //add snipped image paths to appropriate arrays in the characterJSON array
    this.characterJSON.forEach((selection, index) => { // for every object in the array
      for (let array in selection.sprites) {
        let count = selection.max // maximum count of sprites
        let into = []; 
        for(let image = 1; image <= count; image++){
          if(into === null){ 
            // do nothing
          }
          else {
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