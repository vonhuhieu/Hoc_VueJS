<script setup>
import { ref, watchEffect } from 'vue';

const x = ref(0);
const y = ref(0);

const user = ref({
  age: 18,
  class: {
    students: 0,
    name: "A"
  }
});

// goi ngay khi component render lan dau tien
watchEffect(() => {
  console.log(`Gia tri cua x: ${x.value}, y: ${y.value}`);
});

watchEffect(() => {
  console.log(`User: ${JSON.stringify(user.value)}`);
});

const increase = () => {
  x.value++;
  y.value++;
};

const changeAge = () => {
  user.value.age = 20;
};
</script>

<template>
  <div>
    <h1>hello world</h1>
    <p>{{ x }}, {{ y }}</p>
    <button @click="increase">Increase</button>
    <button @click="changeAge">changeAge</button>
  </div>
</template>

<style></style>