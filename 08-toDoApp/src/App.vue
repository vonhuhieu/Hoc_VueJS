<script setup>
import { ref } from 'vue';
  const newToDo = ref('');
  const toDos = ref([
    {
      id: 1,
      text: "Learn VueJS",
    },
    {
      id: 2,
      text: "Build a toDo app",
    }
  ]);
  const addToDo = () => {
    if(newToDo.value.trim() === '') return
    const toDo = {
      id: toDos.value.length + 1,
      text: newToDo.value,
    };
    toDos.value.push(toDo);
    newToDo.value = "";
  };
  const deleteToDo = (id) => {
    toDos.value = toDos.value.filter(toDo => toDo.id != id);
  };
</script>

<template>
  <div>
    <h1>hello world</h1>
    <input type="text" v-model="newToDo" @keyup.enter="addToDo"/>
    <button @click="addToDo">Add</button>
    <ul>
      <li v-for="toDo in toDos" :key="toDo.id">
        {{ toDo.text }}
        <button @click="deleteToDo(toDo.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<style></style>