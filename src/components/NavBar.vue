<script setup>

const navItems = [
    {
        id: 0,
        name: 'Kitchen 1',
        path: '/'
    },
    {
        id: 1,
        name: 'Kitchen 2',
        path: '/kitchen2'
    },
    {
        id: 2,
        name: 'Kitchen 3',
        path: '/kitchen3'
    }
];

</script>


<template>
    <div class="mb-8 pb-4 border-b-2 flex gap-8 text-lg font-bold">
        <router-link v-for="item in navItems" :to="item.path" :key="item.id"
        class="px-4 py-1 text-sm font-bold text-gray-800 bg-pink-500 bg-opacity-10 hover:bg-opacity-25 rounded-lg transition-all">
            {{ item.name }}
        </router-link>
    </div>    
</template>