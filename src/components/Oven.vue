<script setup>


import { ref } from 'vue';
import { computed } from 'vue';
import { defineProps, defineEmits } from 'vue';

// Define the events we want to emit
const emit = defineEmits(['start', 'baked']);

const props = defineProps({
    // The props we want to accept
    food: {
        type: String,
        default: ''
    },
    duration: {
        type: Number,
        default: 0
    }
});

// The oven is busy when it's baking a cake
const isBusy = ref(false);

const bakeACake = () => {
// Emit an event when the oven is started
    emit('start');

    isBusy.value = true;
// Bake `food` for `duration` seconds when the button is clicked
    console.log(`Oven: Baking... (${props.duration / 1000} seconds)`);

    setTimeout(() => {
        isBusy.value = false;
        console.log(`Oven: ${props.food} is ready!`);
// ! Emit an event when the cake is ready
        emit('baked');
    }, props.duration);
};

const prompt = computed(() => {
// The text inside <button>
    return isBusy.value ? 'Baking...' : `Bake a ${props.food}`;
});

</script>

// This is what our SFC renders on screen
<template>
    <div class="w-min bg-gray-200 px-4 py-8 rounded-lg border-2 border-gray-400">
        <h3 class="mb-4 text-lg font-bold">Oven</h3>
        <button :disabled="isBusy" @click="bakeACake"
            class="w-max h-10 px-8 bg-pink-600 hover:bg-pink-500 disabled:bg-gray-500 rounded-lg text-white shadow-lg hover:shadow-xl disabled:cursor-not-allowed transition-all">
            {{ prompt }}
        </button>
    </div>
</template>