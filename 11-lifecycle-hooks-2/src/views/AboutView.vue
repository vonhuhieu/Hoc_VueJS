<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1 id="count">Timer: {{ count }}</h1>
    <button @click="increment">Increase</button>
  </div>
</template>

<script setup>
import { onBeforeUpdate, onUpdated, ref } from 'vue';
const count = ref(0);

const increment = () => {
  count.value++;
};

onBeforeUpdate(() => {
  console.log("onBeforeUpdate",document.getElementById("count").textContent);
});

onUpdated(() => {
  console.log("onUpdate",document.getElementById("count").textContent);
});
</script>
