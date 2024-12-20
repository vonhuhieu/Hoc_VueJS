<script setup>
import { ref } from 'vue';

const text = ref('hello');
const multilineText = ref("");

</script>

<template>
  <div>
    <h1>hello world</h1>
    <p>Text: {{ text }}</p>
    <input v-model="text" />
    <br/>

    <p>Multiline text: {{ multilineText }}</p>
    <textarea v-model="multilineText" placeholder="Input your message"/>
  </div>
</template>

<style></style>