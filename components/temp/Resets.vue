<template>
    <div>
        <span>
            <b-row align-h="center" class="mb-3 d-flex flex-row justify-content-center align-items-center">
                <b-col cols="4" class="d-flex flex-row justify-content-center align-items-center">
                    <b-button variant="danger" size="lg" @click="$emit('re-roll-features')">
                        <p class="tiny">RANDOMIZE FEATURES</p>
                        <font-awesome-icon class="icon" :icon="['fas', 'dice']" />
                    </b-button>
                </b-col>
                <b-col cols="4" class="d-flex flex-row justify-content-center align-items-center">
                    <b-button variant="danger" size="lg" @click="$emit('reset-colors')">
                        <p class="tiny">RANDOMIZE TONES</p>
                        <font-awesome-icon class="icon" :icon="['fas', 'dice']" />
                    </b-button>
                </b-col>
            </b-row>
            <b-row align-h="center" class="mb-3 d-flex flex-row justify-content-center align-items-center">
                <b-col cols="4" class="d-flex flex-row justify-content-center align-items-center">
                    <b-button variant="danger" size="lg" @click="$emit('reset-colors', 'fullRandom')">
                        <p class="tiny">RANDOMIZE EVERYTHING</p>
                        <font-awesome-icon class="icon" :icon="['fas', 'dice']" />
                    </b-button>
                </b-col>
            </b-row>
        </span>
    </div>
</template>