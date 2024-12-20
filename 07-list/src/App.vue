<script setup>
import { ref } from 'vue';

const shoppingItems = ref([
  {
    name: "apple",
    price: 7,
  },
  {
    name: "orange",
    price: 12,
  },
  {
    name: "banana",
    price: 12,
  }
]);

const user = ref([
  {
    name: "Vonhuhieu",
    age: 21,
    isActive: true,
  },
  {
    name: "Vy",
    age: 21,
    isActive: false,
  },
  {
    name: "Duyen",
    age: 21,
    isActive: true,
  },
]);
</script>

<template>
  <div>
    <h1>hello world</h1>
    <ul>
      <li v-for="item in shoppingItems" :key="item.name">
        {{ item.name }} - {{ item.price }}
      </li>
    </ul>
    <span v-for="n in 10" :key="n">{{ n }}</span>
    <ul>
      <template v-for="(user, index) in user" :key="user.name">
        <li v-if="!user.isActive" :key="user.name">
          {{ user.name }} : {{ user.isActive ? "Active" : "De" }}({{ index }})
        </li>
      </template>
    </ul>
  </div>
</template>

<style></style>