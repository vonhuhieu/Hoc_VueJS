<script setup>
import { nextTick, reactive, ref } from 'vue';
const count = ref(0);
const increaseCount = async () => {
  count.value++;
  console.log(document.getElementById('count').innerText);
  await nextTick();
  console.log(document.getElementById('count').innerText);
};
const decreaseCount = () => {
  count.value--;
  console.log(document.getElementById('count').innerText);
};
const obj = reactive({
  user: {
    age: 21,
    name: "Vonhuhieu",
  },
});
const increaseAge = () => obj.user.age++;
const decreaseAge = () => obj.user.age--;
</script>

<template>
  hello world
  <p id="count">Count: {{ count }}</p>
  <button @click="increaseCount">Increase</button>
  <button @click="decreaseCount">Decrease</button>
  <p>Your age: {{ obj.user.age }}</p>
  <button @click="increaseAge">Increase</button>
  <button @click="decreaseAge">Decrease</button>
</template>