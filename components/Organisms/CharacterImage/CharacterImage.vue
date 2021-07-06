<template>
<v-hover>
    <template v-slot:default="{ hover }">
        <v-card class="size d-flex flex-column align-center justify-center" >
            <v-img 
                v-bind="$attrs"
                :src="require(`@/assets/images/characters/${who.image}.png`)"
                height="232"
                width="200"
                max-height="232"
                max-width="200"
            >
            <div class="size animateRank" :class="rarityOverlay"></div>
            </v-img>
            <v-fade-transition>
                <v-overlay v-if="hover" :key="taglineOverlay + who.image" opacity=".5" :absolute="true" :value="true" class="white--text text-body-1 pa-5 text-center text-uppercase">
                    <div class="shadow">
                        {{ who.tagline }}
                    </div>
                </v-overlay>
            </v-fade-transition>
        </v-card>
    </template>
</v-hover>
</template>

<script>
import characters from '@/components/Organisms/CharacterImage/CharacterImage.mock.js'

    export default {
        name: 'CharacterImage',
        props: {
            who: {
                type: Object,
                default: () => characters['swordsman']
            },
            rarity: {
                type: String,
                default: 'normal'
            },
        },
        data() {
            return {
                hover: false,
                rarityLookup: {
                    normal: '',
                    virulent: 'virulentOverlay',
                    fearsome: 'fearsomeOverlay',
                    bloodless: 'bloodlessOverlay',
                    flawless: 'flawlessOverlay',
                }
            }
        },
        computed: {
            rarityOverlay() {
                return this.rarityLookup[this.rarity]
            }
        }
    }
</script>

<style lang="scss" scoped>
.size {
    height: 245px;
    width: 210px;
}

.virulentOverlay {
//   background-image: linear-gradient(45deg,rgba(255,0,250,.3) 0%,rgba(255,0,112,.3) 15%,rgba(255,125,248,.3) 30%,rgba(255,0,250,.3) 45%,rgba(255,125,248,.3) 60%,rgba(255,88,206,.3) 75%,rgba(255,0,250,.3) 90%,rgba(255,0,108,.3) 100%);
  background-image: linear-gradient(45deg,rgba(255,0,250,.3) 0%,rgba(255,0,112,.3) 15%,rgba(255,125,248,.3) 30%,rgba(255,0,250,.3) 45%,rgba(255,125,248,.3) 60%,rgba(255,88,206,.3) 75%,rgba(255,0,250,.3) 90%,rgba(255,0,108,.3) 100%);
  background-size: 800% 800%;
}

.fearsomeOverlay {
  background-image: linear-gradient(45deg, rgba(255,0,0,.5) 0%, rgba(255,68,0,.5) 15%, rgba(255, 101, 101, 0.5) 30%, rgba(255,0,0,.5) 45%, rgba(255, 104, 104, 0.5) 60%, rgba(255,0,0,.5) 75%, rgba(255,68,0,.5) 90%, rgba(255,0,0,.5) 100%);
  background-size: 800% 800%;
}

.bloodlessOverlay {
  background-image: linear-gradient(45deg, rgba(255,132,0,0.5) 0%, rgba(255,166,0,0.5) 15%, rgba(255,200,112,0.3) 30%, rgba(255,132,0,0.5) 45%, rgba(255,200,112,0.5) 60%, rgba(255,200,112,0.5) 75%, rgba(255,166,0,0.5) 90%, rgba(255,132,0,0.5) 100%);  background-size: 800% 800%;
  background-size: 800% 800%;
}

.flawlessOverlay {
  background-image: linear-gradient(45deg, rgba(255,0,0,0.5) 0%, rgba(255,141,0,0.5) 10%, rgba(255,184,45,0.5) 20%, rgba(255,237,112,0.3) 30%, rgba(39,253,110,0.5) 40%, rgba(0,224,255,0.5) 50%, rgba(112,148,255,0.5) 60%, rgba(186,112,255,0.5) 70%, rgba(206,60,159,0.5) 80%, rgba(255,0,5,0.5) 90%, rgba(255,0,0,0.5) 100%);
  background-size: 800% 800%;
}

@-webkit-keyframes rankAnimation {
    0%{background-position:93% 0%}
    50%{background-position:0% 100%}
    100%{background-position:93% 0%}
}
@-moz-keyframes rankAnimation {
    0%{background-position:93% 0%}
    50%{background-position:0% 100%}
    100%{background-position:93% 0%}
}
@keyframes rankAnimation {
    0%{background-position:93% 0%}
    50%{background-position:0% 100%}
    100%{background-position:93% 0%}
}

.animateRank {
    -webkit-animation: rankAnimation 9s ease infinite;
    -moz-animation: rankAnimation 9s ease infinite;
    animation: rankAnimation 9s ease infinite;
}

.shadow {
    text-shadow:black -1px 0px 5px;
}
</style>