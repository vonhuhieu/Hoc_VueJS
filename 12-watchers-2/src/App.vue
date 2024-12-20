<script setup>
import { ref, watch } from 'vue';

const x = ref(0);
const y = ref(0);

const user = ref({
  age: 18,
});

watch(
  () => x.value + y.value,
  (sum) => {
    // console.log(`Tong cua x va y: ${sum}`);
  }
);

watch([x, () => y.value + 1], ([newX, newY]) => {
  console.log(`Gia tri cap nhat: ${newX}, ${newY}`);
});

watch(() => user.value.age, (newTuoi) => {
  console.log(`Tuoi: ${newTuoi}`);
});

const changeAge = () => {
  user.value.age = 20;
};

const increment = () => {
  x.value++;
  y.value++;
}
</script>

<template>
  <div>
    <h1>hello world</h1>
    <p>{{ x }}, {{ y }}</p>
    <button @click="increment">increase</button>
    <br />
    <button @click="changeAge">change Age</button>
    <p>{{ user.age }}</p>
  </div>
</template>

<style></style>