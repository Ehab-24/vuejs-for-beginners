<script setup>

import { ref, computed, defineProps, defineEmits } from 'vue';

const emit = defineEmits(['start', 'finish']);

const props = defineProps({
    coffeeAmount: {
        type: Number,
        required: true
    },
    waterAmount: {
        type: Number,
        required: true
    }
});

const isBusy = ref(false);

const prompt = computed(() => {
    return isBusy.value ? 'Brewing...' : `Brew ${props.coffeeAmount} table spoon of coffee with ${props.waterAmount} oz of water`;
});

const brewCoffee = () => {
    emit('start');
    isBusy.value = true;
    console.log(`CoffeeMaker: Brewing... (${props.coffeeAmount} table spoon of coffee with ${props.waterAmount} oz of water)`);
    setTimeout(() => {
        isBusy.value = false;
        console.log(`CoffeeMaker: Coffee is ready!`);
        emit('finish');
    }, 2000);
};

</script>


<template>
    <div class="w-min bg-orange-200 px-4 py-8 rounded-lg border-2 border-orange-400">
        <h3 class="mb-4 text-lg font-bold">Coffee Machine</h3>
        <button :disabled="isBusy" @click="brewCoffee"
            class="w-max h-10 px-8 bg-pink-600 hover:bg-pink-500 disabled:bg-orange-500 rounded-lg text-white shadow-lg hover:shadow-xl disabled:cursor-not-allowed transition-all">
            {{ prompt }}
        </button>
    </div>
</template>