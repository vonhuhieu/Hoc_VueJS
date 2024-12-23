<template>
    <p>User data</p>
    {{ user }}
</template>

<script setup>
import { ref } from 'vue';

const user = ref(null);

const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
user.value = await response.json();
</script>