<template>
    <v-card class="d-flex justify-center pa-5">
        <AvatarCanvas :canvasSize="200" class="mr-2"/>
        <div class="d-flex flex-column">
            <h4 class="text-h4">
                {{username}}
            </h4>
            <p class="text-body-1">
                Highest Score:
                {{highscore}}
            </p>
            <p class="text-body-1">
                Lifetime Monsters Slain: {{lifetimeKills}}
            </p>
            <p class="text-body-1">
                Highest Stats: <IconCard v-for="items in highestStats" :key="items.icon" :icon="items.icon" :value="items.value"/>
            </p>
        </div>
    </v-card>
</template>

<script>
import { mapState } from 'vuex'

export default {
	name: 'LeaderboardCard',
    computed: {
        ...mapState('userData', {
            username: state => state.user.username,
            highscore: state => state.user.highscore,
            lifetimeKills: state => state.lifetimeKills,
            highestStats: state => state.user.highestStat
        })
    }
}
</script>