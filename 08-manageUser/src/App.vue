<script setup>
import { ref } from 'vue';

const newUser = ref('');

const listUsers = ref([]);

const addNewUser = () => {
  if (newUser.value.trim() === '') {
    return;
  }
  const user = {
    id: listUsers.value.length + 1,
    name: newUser.value,
  };
  listUsers.value.push(user);
  newUser.value = '';
};

const deleteUser = (id) => {
  listUsers.value = listUsers.value.filter(user => user.id != id);
};
</script>

<template>
  <div>
    Hello world
    <input type="text" v-model="newUser" @keyup.enter="addNewUser" />
    <button @click="addNewUser">Add</button>
    <ul>
      <li v-for="user in listUsers" :key="user.id">
        {{ user.id }} : {{ user.name }}
        <button @click="deleteUser(user.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>