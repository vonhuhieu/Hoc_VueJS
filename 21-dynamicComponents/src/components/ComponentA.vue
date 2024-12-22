<template>
    <p>Component A</p>
    <div class="flex">
        <button @click="count--">Decrement</button>
        <p>{{ count }}</p>
        <button @click="count++">Increment</button>
    </div>
</template>

<script setup>
import { onActivated, onDeactivated, ref } from 'vue';

const count = ref(0);

onActivated(() => {
    console.log("onActivated component A");
});

onDeactivated(() => {
    console.log("onDeactived compoent A");
});
</script>

<style scoped>
.flex {
    display: flex;
}
</style>