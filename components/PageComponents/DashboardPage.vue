<template>
     <div>
        <v-row>
            <v-col cols="4">
                <ContentCard class="pa-4" height="25vh">
                    <div class="text-h5">Game Updates</div>
                    <div class="text-body-1">New Alpha Version - v2.0</div>
                    <ul class="text-subtitle-2">
                        <li>Complete game overhaul</li>
                        <li>New gameplay features</li>
                        <li>New magical armor type</li>
                        <li>New shopkeeper</li>
                        <li>New travel system</li>
                        <li>Customizable avatars</li>
                        <ul>
                            <li><a href="">Complete change log here...</a></li>
                        </ul>
                    </ul>
                </ContentCard>
            </v-col>
            <v-col cols="4" @click="changePhase('CharacterSelectPage')">
                <ContentCard hoverable>
                    <v-img class="cursorPointer" :src="require('@/assets/images/sigils/player.png')" max-height="100" max-width="100"/>
                    <div class="text-h6">Start A New Game</div>
                </ContentCard>
            </v-col>
            <v-col cols="4">
                <ContentCard v-if="savedGame" hoverable class="pa-4 text-h6 d-flex align-center justify-center text-center" height="25vh">
                    <div>Load Game</div>
                </ContentCard>
                <ContentCard v-else class="pa-4 text-h6 d-flex align-center justify-center text-center" height="25vh">
                    <div>No Save Game Detected</div>
                </ContentCard>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="4">
                <ContentCard class="pa-4 px-5 d-flex flex-column align-center justify-center text-center" height="25vh">
                    <v-img class="cursorPointer" :src="require('@/assets/images/ui/discord.png')" max-height="50" max-width="50"/>
                    <div class="text-h6">
                        DISCORD
                    </div>
                    <div class="text-body-1">
                        Click here to join the Moebius Dungeon discord server where you can talk about the game, suggest improvements and stay in touch.
                    </div>
                </ContentCard>
            </v-col>
            <v-spacer></v-spacer>
             <v-col cols="4" @click="changePhase('LeaderBoardPage')">
                <ContentCard hoverable class="pa-4 d-flex flex-column align-center justify-center text-center" height="25vh">
                    <v-img class="cursorPointer" :src="require('@/assets/images/sigils/traveler.png')" max-height="100" max-width="100"/>
                    <div class="text-h6">LEADERBOARDS</div>
                </ContentCard>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default{
	name: 'Dashboard',
	computed: {
		...mapState('saveData', [
			'savedGame',
		]),
	},
	methods: {
		...mapMutations('gameData', [
			'CHANGE_PHASE',
		]),
		changePhase(newPhase){
			this.CHANGE_PHASE(newPhase)
		}
	}
} 
</script>
