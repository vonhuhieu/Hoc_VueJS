<template>
    <button @click="callFunctionIncrease"><slot name="increase">Button content</slot></button>
    <button @click="callFunctionIncreaseByTwoTimes"><slot name="increaseByTwoTimes">Button content</slot></button>
    <button @click="callFunctionIncreaseBy"><slot name="increaseBy">Button content</slot></button>
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