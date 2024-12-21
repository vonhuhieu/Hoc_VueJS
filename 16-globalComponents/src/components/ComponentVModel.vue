<template>
    <div>
        <label for="email">Email</label>
        <input type="text" v-model="email" />
        <p>{{ email }}</p>
        <button @click="setEmailDefault">Reset</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const email = defineModel();

const setEmailDefault = () => {
    email.value = "default@gmail.com";
};
</script>