<script setup>
import { ref } from 'vue';
import ComponentA from './components/ComponentA.vue';
import ComponentB from './components/ComponentB.vue';
const currentComponent = ref(ComponentA);
</script>

<template>
  <div>
    <h1>hello world</h1>
    <button @click="currentComponent = ComponentA">Show component A</button>
    <button @click="currentComponent = ComponentB">Show component B</button>
    <!-- <ComponentA /> -->
    <KeepAlive>
      <component v-bind:is="currentComponent"></component>
    </KeepAlive>
  </div>
</template>

<style></style>