<script setup>
import { reactive, ref } from 'vue';

const color = ref('red');
const background = ref('blue');
const fontSize = ref(30);

const styleObject = reactive({
  border: 'none',
  borderRadius: '6px',
});
</script>

<template>
  hello world
  <button v-bind:style="[styleObject, {
    color: color,
    background: background,
    fontSize: fontSize + 'px',
  }]">Button</button>
</template>

<style></style>