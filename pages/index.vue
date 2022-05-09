<template>
<div>
	<transition mode="out-in" name="fade">
		<component :key="phase" :is="phase"/>
	</transition>
</div>
</template>

<script>
import { mapState } from 'vuex'

export default{
	name: 'Dashboard',
	computed: {
		...mapState('gameData', [
			'phase',
		]),
	},
}   
</script>