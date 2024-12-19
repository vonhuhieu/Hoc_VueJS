<script setup>
  import { ref } from 'vue';
  const count = ref(-3);
  const increase = () => count.value++;
  const decrease = () => count.value--;
</script>

<template>
  hello world
  <p>{{ count }}</p>
  <button @click="decrease">Decrease</button>
  <button @click="increase">Increase</button>
</template>
