<script setup>
import { computed, reactive, ref } from 'vue';

const book = reactive({
  name: "USSR",
  chapters: [],
});

const addChapter = () => {
  book.chapters.push(1);
};

const isPublished = computed(() => {
  console.log("check ham isPublished");
  return book.chapters.length > 0 ? "Published" : "not published";
});

const firstName = ref('Vo Nhu');
const lastName = ref('Hieu');
const fullName = computed({
  get(){
    return firstName.value + " " + lastName.value;
  },
  set(newFullName){
    [firstName.value, lastName.value] = newFullName.split(',');
  }
});
const changeFullName = () => {
  fullName.value = 'Vo, Ha';
}
</script>

<template>
  hello world
  <p>Book's name: {{ book.name }}</p>
  <p>Status: {{ isPublished }}</p>
  <button @click="addChapter">Add chapter</button>
  <p>Full Name: {{ fullName }}</p>
  <button @click="changeFullName">Change FullName</button>
</template>