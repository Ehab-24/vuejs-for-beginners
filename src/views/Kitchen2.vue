<script setup>

import Oven from '../components/Oven.vue';
import CoffeeMaker from '../components/CoffeeMaker.vue';

import getCurrentKitchenItems from '../composables/getCurrentKitchenItems';

const ovens = [
    {
        id: 0,
        food: 'Bagel',
        duration: 3000
    },
    {
        id: 1,
        food: 'Whoopie pie',
        duration: 2000
    },
];
const coffeeMakers = [
    {
        id: 0,
        coffeeAmount: 1,
        waterAmount: 5
    }
];

const { currentItems, addToCurrentItems, removeFromCurrentItems } = getCurrentKitchenItems();

</script>

<template>
    <div class="flex flex-col items-center">
        <h1 class="mb-8 text-3xl font-bold text-gray-800">
            Kitchen 2
        </h1>

        <div class="flex gap-4 my-4">
            <h3 v-for="item in currentItems" :key="item">{{ item }}</h3>
        </div>

        <div class="grid grid-cols-2 gap-8">
            <Oven v-for="oven in ovens" :key="oven.id" :food="oven.food" :duration="oven.duration"
                @start="addToCurrentItems(oven.food)" @baked="removeFromCurrentItems(oven.food)" />
            <CoffeeMaker v-for="cm in coffeeMakers" :key="cm.id" :coffee-amount="cm.coffeeAmount"
                :water-amount="cm.waterAmount" 
                @start="addToCurrentItems('Coffee')" @finish="removeFromCurrentItems('Coffee')"
            />
        </div>
    </div>
</template>