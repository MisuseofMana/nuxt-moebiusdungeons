<template>
<b-row>
  
  <b-col cols="5" class="mb-4 mt-2 d-flex flex-row justify-content-center">
    <b-row align-h="center">
    <b-col cols="12" sm="12" md="10" class="d-flex flex-column justify-content-center ">
      <b-row align-h="center" class="d-flex flex-row justify-content-center">
        <b-col cols="12" class="d-flex flex-row justify-content-center">
          <canvas id="canvas" class="mb-3" width="500" height="500"></canvas>
        </b-col>
      </b-row>
      
      <LoadingSpinner v-show="false" key="loader"/>
    </b-col>
          <Resets/>
    </b-row>
  </b-col>

   <b-col cols="7" class="d-flex flex-wrap align-items-center justify-content-center">
    <PartEditor
      v-for="item in selections"
      @new-pick="pickNewItem($event)"
      @random-item="randomItem()"
      @change-color="changeColor($event)"
      @random-active-color="randomActiveColor()"
      @randomize-character="randomize()"
      @reset-all="resetAll()"
      @new-lightness="setLightness($event)"
      @save-color="saveColor($event)"
      @color-match="colorMatch($event)"
      @swatch-pick="swatchPick($event)"
      @re-roll-features="reRollFeatures()"
      :hidden="selections[activeIndex].disable"
      :type="item.name.replace('-', ' ')"
      :activeColor="selections[activeIndex].color"
      :lightness="selections[activeIndex].lightness"
      :maxRange="selections[activeIndex].max" 
      :key="item.name" 
      :which="selections[activeIndex].which"
      :expandedMenu="expandedMenu"
      :colorHistory="colorList"
      />
  </b-col>
  
  <!-- hidden canvas -->
  <canvas class="d-none" width="500" height="500" id="stageCanvas"></canvas>

</b-row>
</template>

<script>
import PartEditor from '@/components/PartEditor'
import LoadingSpinner from '@/components/LoadingSpinner'
import Resets from '@/components/Resets'

import presets from '@/assets/presets/preset.js'

export default {
  components: {
    PartEditor,
    LoadingSpinner,
    Resets
  },
  data() {
    return {
      presets,
      loading:true,
      active: 'body',
      selections: [
        {
          name:'hair-back',
          sprites: {
            flat:[],
            flatImg: null,
            line:[],
            lineImg: null,
          },
          optionOn: false,
          which: 0,
          top: 0,
          left: 0,
          rotation: 0,
          scaleWidth:500,
          scaleHeight:500,
          max: 17,
          disable: false,
          color:false,
          hue:0,
          saturation:0,
          lightness:0
        },
        {
          name: 'body',
          sprites: {
            flat:[],
            flatImg:null,
            line:[],
            lineImg:null,
          },
          optionOn: false,
          which: 0,
          top: 2,
          left: 0,
          rotation: 0,
          scaleWidth:500,
          scaleHeight:500,
          max: 10,
          disable: false,
          color:false,
          hue:0,
          saturation:0,
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
          optionOn: false,
          which: 0,
          top: 0,
          left: 0,
          rotation: 0,
          scaleWidth:500,
          scaleHeight:500,
          max:32,
          disable: false,
          color:false,
          hue:0,
          saturation:0,
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
          optionOn: false,
          which: 0,
          top: 0,
          left: 0,
          rotation: 0,
          scaleWidth:500,
          scaleHeight:500,
          max:18,
          disable: false,
          color:false,
          hue:0,
          saturation:0,
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
          optionOn: false,
          which: 0,
          top: 0,
          left: 0,
          rotation: 0,
          scaleWidth:500,
          scaleHeight:500,
          max: 23,
          disable: false,
          color:false,
          hue:0,
          saturation:0,
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
          optionOn: false,
          which: 0,
          top: 0,
          left: 0,
          rotation: 0,
          scaleWidth:500,
          scaleHeight:500,
          max: 21,
          disable: false,
          color:false,
          hue:0,
          saturation:0,
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
          optionOn: false,
          which: 0,
          top: 2,
          left: 0,
          rotation: 0,
          scaleWidth:500,
          scaleHeight:500,
          max: 18,
          disable: false,
          color:false,
          hue:0,
          saturation:0,
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
          optionOn: false,
          which: 0,
          top: 0,
          left: 0,
          rotation:0,
          scaleWidth:500,
          scaleHeight:500,
          max: 22,
          disable: false,
          color:false,
          hue:0,
          saturation:0,
          lightness:0,
        },

        {
          name:'hair-front',
          sprites: {
            flat:[],
            flatImg:null,
            line:[],
            lineImg:null,
          },
          optionOn: false,
          which: 0,
          top: 2,
          left: 0,
          rotation: 0,
          scaleWidth:500,
          scaleHeight:500,
          max: 20,
          disable: false,
          color:false,
          hue:0,
          saturation:0,
          lightness:0
        },
        {
          name:'clothes',
          sprites: {
            flat:[],
            flatImg:null,
            line:[],
            lineImg:null,
          },
          optionOn: false,
          which: 0,
          top: 2,
          left: 0,
          rotation: 0,
          scaleWidth:500,
          scaleHeight:500,
          max: 13,
          disable: false,
          color:false,
          hue:0,
          saturation:0,
          lightness:0
        },
      ],
      imagesToLoad:0,
      expandedMenu: 'choose',
      colorList: [],
      saveFile: null,
    }
  },
  computed: {
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
    setActive(e){
      this.active = e;
    },
    init() {
      this.loading = true;
      this.imagesToLoad = 0;
      var img;
        for(let selection in this.selections){
          if (!this.selections[selection].disable){
            this.imagesToLoad += 2
          }
        }

        for(let selection in this.selections){
          let current = this.selections[selection]
          if(!current.disable){
              for(let i = 0; i < 2; i++){
                let sources = [current.sprites.flat[current.which], current.sprites.line[current.which]];
                let targets = ['flatImg', 'lineImg'];
                img = new Image(500,500);
                current.sprites[targets[i]] = img;
                img.onload = () => {
                  this.imagesToLoad--;
                  if (this.imagesToLoad <= 0) {
                    this.loading = false;
                    this.drawImages();
                    // this.testDraw();
                  }
                }
                img.onerror = () => {
                  console.log('error loading image')
                }
                try {
                  img.src = require(`@/assets/sprites/${sources[i]}`);
                } catch {
                  this.imagesToLoad--;
                  current.sprites[targets[i]] = null;
                }
          }
        }
      }
    },
    testDraw() {
      this.stagectx.clearRect(0,0,500,500)
      let current = this.selections[4]

      this.stagectx.globalCompositeOperation = "source-over";
      this.stagectx.drawImage(current.sprites.flatImg, 0, 0, 500, 500, 0, 0, 500, 500);

      this.stagectx.globalCompositeOperation = 'lighter';
      this.stagectx.fillStyle = 'hsl(0, 0%, 50%)';
      this.stagectx.fillRect(0, 0, 500, 500);

      this.stagectx.globalCompositeOperation = "destination-in";
      this.stagectx.drawImage(current.sprites.flatImg, 0, 0, 500, 500, 0, 0, 500, 500);

      this.stagectx.globalCompositeOperation = "source-over";
      this.stagectx.drawImage(current.sprites.lineImg, 0, 0, 500, 500, 0, 0, 500, 500);
    },
    drawImages(){
      this.ctx.clearRect(0,0,500,500) //clear the display canvas
      this.stagectx.clearRect(0,0,500,500) //clear the display canvas

      for(let selection in this.selections) { //loop through all selections
        // this.stagectx.clearRect(0,0,500,500) //clear the display canvas
        let current = this.selections[selection];
        
        if(current.disable === true) { /*draw nothing if the option is disabled*/ }
          else {          
            if (current.rotation !== 0) {
              this.stagectx.save();
              this.stagectx.translate(250, 250);
              this.stagectx.rotate(Math.PI / 12 * (current.rotation));
              this.stagectx.translate(-250, -250); 
            }
    
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
      // this.stagectx.clearRect(0,0,500,500)
    },
    pickNewItem(e) {
      this.selections[this.activeIndex].which = e;
      this.selections[this.activeIndex].disable = false;
      this.init();
    },
    randomItem(){
      let randomPick = Math.floor(Math.random() * this.selections[this.activeIndex].max);
      this.selections[this.activeIndex].which = randomPick;
      this.selections[this.activeIndex].disable = false;
      this.init();
    },
    addNewColor() {
      let active = this.selections[this.activeIndex]
      if(this.colorList.length >= 12){
        this.colorList.pop()
      } 
      
      this.colorList.unshift(`hsl(${active.hue}, ${active.saturation}%, ${active.lightness}%)`);
      
    },
    colorMatch() {
      let matchHue = this.selections[this.activeIndex].hue
      let matchSat = this.selections[this.activeIndex].saturation
      let matchLight = this.selections[this.activeIndex].lightness
      let options = this.selections;
      let currentSelected = this.selections[this.activeIndex].name

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
      for(let selection of this.selections){
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
       let selection = this.selections[this.activeIndex]
      selection.color = true
      selection.hue = this.randomNumber(0, 359)
      selection.saturation = this.randomNumber(0,100)
      selection.lightness = this.randomNumber(15,100)
      this.init()
    },
    setOpen(e){
      this.expandedMenu = e;
    },
    swatchPick(e){
      let parsedHSL = e.slice(4, -1).replaceAll(',', '').replaceAll('%', '');
      let hslArray = parsedHSL.split(' ')
      this.assignHSL(hslArray, this.selections[this.activeIndex])
      this.init()
    },
    setLightness(e){
      this.selections[this.activeIndex].color = true
      this.selections[this.activeIndex].lightness = e
      this.addNewColor()
      this.init()
    },
    resetColor() {
      this.selections[this.activeIndex].color = false
      this.selections[this.activeIndex].hue = 0
      this.selections[this.activeIndex].saturation = 0
      this.selections[this.activeIndex].lightness = 50
      this.init()
    },
    reRollColors(e) {
      const skin = [this.randomNumber(1,50), this.randomNumber(15,55), this.randomNumber(50,95)];
      const hair = [this.randomNumber(0,360), this.randomNumber(0,100), this.randomNumber(50,100)]
      const garb = [this.randomNumber(0,360), this.randomNumber(0,50), this.randomNumber(50,75)]

      for(let selection of this.selections){
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
      for(let selection of this.selections){
        selection.which = this.randomNumber(1,selection.max-1)
        selection.left = 0;
        selection.top = 0;
        selection.rotation = 0;
        selection.scaleWidth = 500;
        selection.scaleHeight = 500;
      }
      this.init()
    },
    assignHSL(array, selection){
      selection.color = true;
      selection.hue = array[0]
      selection.saturation = array[1]
      selection.lightness = array[2]
    },
    resetActive(){
      this.selections[this.activeIndex].left = 0;
      this.selections[this.activeIndex].top = 0;
      this.selections[this.activeIndex].color = false;
      this.selections[this.activeIndex].lightness = 0;
      this.selections[this.activeIndex].rotation = 0;
      this.selections[this.activeIndex].scaleWidth = 500;
      this.selections[this.activeIndex].scaleHeight = 500;
      this.selections[this.activeIndex].disable = false;
      this.init();
    },
    resetAll(){
      for(let selection of this.selections){
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
    let randomPreset = this.presets[this.randomNumber(0, this.presets.length - 1 )]

    //add snipped image paths to appropriate arrays in the selections array
    this.selections.forEach((selection, index) => {
      this.selections[index] = {...selection, ...randomPreset[index]}
      for (let array in selection.sprites) {
        let count = selection.max
        let into = selection.sprites[array];
        for(let image = 1; image <= count; image++){
          if(into === null){ 
            // do nothing
          }
          else {
            into.push(`${selection.name}/${array}/${image}.png`);
            this.imgsToLoad++;
          }
        }
      }
    })
    this.init();
  }
}
</script>

<style scoped>
  .hidden {
    display:none;
  }

  .border {
      border:solid 1px black;
      padding:10px;
  }

  #canvas, #stageCanvas {
    border: solid 2px black;
    width: 100%;
    max-width:500px;
    height: auto;
  }
</style>
