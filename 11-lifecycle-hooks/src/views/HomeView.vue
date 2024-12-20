<template>
  <div class="home">
    <h1>This is a home page</h1>
    <h1>Countdown: {{ time }}</h1>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

const time = ref(60);

let intervalId = null;

onMounted(() => {
  intervalId = setInterval(() => {
    if (time.value === 0) {
      time.value = 60;
    }
    time.value--;
  }, 1000);
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>
