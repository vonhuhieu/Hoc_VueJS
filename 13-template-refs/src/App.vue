<script setup>
import { onMounted, ref } from 'vue';

const inputRef = ref(null);
onMounted(() => {
  inputRef.value.focus();
});
console.log(inputRef);
</script>

<template>
  <div>
    <h1>hello world</h1>
    <input ref="inputRef"/>
  </div>
</template>

<style></style>