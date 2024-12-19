<script setup>
import { reactive, ref } from 'vue';
const count = ref(0);
const increaseCount = () => count.value++;
const decreaseCount = () => count.value--;
const obj = reactive({
  user:{
    age: 21,
    name: "Vonhuhieu",
  },
});
const increaseAge = () => obj.user.age++;
const decreaseAge = () => obj.user.age--;
</script>

<template>
  hello world
  <p>Count: {{ count }}</p>
  <button @click="increaseCount">Increase</button>
  <button @click="decreaseCount">Decrease</button>
  <p>Your age: {{ obj.user.age }}</p>
  <button @click="increaseAge">Increase</button>
  <button @click="decreaseAge">Decrease</button>
</template>