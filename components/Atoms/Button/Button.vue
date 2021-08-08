<template>
    <v-btn
        :disabled="disabled"
        :color="color"
    >
        {{ text }}
    </v-btn>
</template>

<script>
export default {
	name: 'Button',
	props: {
		text: {
			type: String,
			default: 'Default',
		},
		disabled: {
			type: Boolean,
			default: false,
		},
		color: {
			type: String,
			default: 'primary',
		},
	},
}
</script>