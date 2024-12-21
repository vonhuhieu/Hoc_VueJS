<template>
    <button @click="callFunctionIncrease">Click</button>
    <button @click="callFunctionIncreaseByTwoTimes">Click me</button>
    <button @click="callFunctionIncreaseBy">click me 2</button>
    <button @click="callFunctionIncreaseBy2">click me 3</button>
</template>

<script setup>
const emit = defineEmits(['increase', 'increaseByTwoTimes', 'increaseBy', 'increaseBy2']);
const callFunctionIncrease = () => {
    emit('increase');
}; 
const callFunctionIncreaseByTwoTimes = () => {
    emit('increaseByTwoTimes')
};
const callFunctionIncreaseBy = () => {
    emit('increaseBy', 5);
};
const callFunctionIncreaseBy2 = () => {
    emit('increaseBy2', 15,20);
};
</script>