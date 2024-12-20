<script setup>

import { ref } from 'vue';

const count = ref(0);

const greet = (event) => {
  console.log(event.target);
  alert(`Xin chao ${event.type}`);
};

const sayHi = (name) => {
  alert(`Xin chao ${name}`);
};
</script>

<template>
  <div>
    <h1>hello world</h1>
    <button @click="greet">Them 1</button>
    <button @click="sayHi('a')">Say Hi</button>
    <p>{{ count }}</p>
  </div>
</template>

<style></style>