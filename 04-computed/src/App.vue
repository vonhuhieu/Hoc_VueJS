<script setup>
import { computed, reactive } from 'vue';

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
</script>

<template>
  hello world
  <p>Book's name: {{ book.name }}</p>
  <p>Status: {{ isPublished }}</p>
  <button @click="addChapter">Add chapter</button>
</template>