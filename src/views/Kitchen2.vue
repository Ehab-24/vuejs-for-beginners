<script setup>

import Oven from '../components/Oven.vue';
import CoffeeMaker from '../components/CoffeeMaker.vue';

const ovens = [
    {
        id: 0,
        food: 'Pretzel',
        duration: 3000
    },
    {
        id: 1,
        food: 'Banana bread',
        duration: 2000
    },
];
const coffeeMakers = [
    {
        id: 0,
        coffeeAmount: 1,
        waterAmount: 5
    },
    {
        id: 1,
        coffeeAmount: 2,
        waterAmount: 6
    }
];

</script>

<template>
    <div class="flex flex-col items-center">
        <h1 class="mb-8 text-3xl font-bold text-gray-800">
            Kitchen 2
        </h1>

        <div class="grid grid-cols-2 gap-8">
            <Oven v-for="oven in ovens" :key="oven.id" :food="oven.food" :duration="oven.duration"
                @start="addToCurrentlyBaking(oven.food)" @baked="removeFromCrrenltyBaking(oven.food)" />
            <CoffeeMaker v-for="cm in coffeeMakers" :key="cm.id" :coffee-amount="cm.coffeeAmount" :water-amount="cm.waterAmount"/>
        </div>
    </div>
</template>