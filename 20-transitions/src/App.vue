<script setup>
import { ref } from 'vue';

const isShow = ref(true);
</script>

<template>
  <div>
    <h1>hello world</h1>
    <h1>Transition</h1>
    <button @click="isShow = !isShow">Toggle fade</button>

    <Transition name="fade">
      <p v-if="isShow">Hello</p>
    </Transition>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>