<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>Timer: {{ time }}</h1>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

const time = ref(0);
let intervalId = null;

onMounted(() => {
  // cú pháp cơ bản của setInterval: const intervalId = setInterval(callback, delay);
  // callback: thực thi sau khoảng thời gian chỉ định
  // delay: khoảng thời gian (ms) giữa các lần thực thi
  intervalId = setInterval(() => {
    time.value++
  }, 1000)
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>
