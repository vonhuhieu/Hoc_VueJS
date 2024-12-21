<script setup>
import { onMounted, ref } from 'vue';

const inputRef = ref(null);
const list = ref(["item 1", "item 2", "item 3"]);
const itemRefs = ref([]);
onMounted(() => {
  inputRef.value.focus();

  itemRefs.value.forEach((item) => {
    item.style.transition = 'opacity 10s'
    item.style.opacity = 1;
  });
});
console.log(itemRefs);
console.log(inputRef);
</script>

<template>
  <div>
    <h1>hello world</h1>
    <input ref="inputRef"/>
    <ul>
      <li v-for="(item,index) in list" :key="index" ref="itemRefs" style="opacity: 0;">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<style></style>