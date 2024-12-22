<script setup>
import { ref } from 'vue';

const isShow = ref(true);
</script>

<template>
  <div>
    <h1>hello world</h1>
    <h1>Transition</h1>
    <button @click="isShow = !isShow">Toggle fade</button>

    <Transition>
      <p v-if="isShow">Hello</p>
    </Transition>
  </div>
</template>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 3s ease;
}

.v-enter-from,
.v-enter-to {
  opacity: 0;
}
</style>