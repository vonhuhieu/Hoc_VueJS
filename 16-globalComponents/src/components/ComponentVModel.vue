<template>
    <div>
        <label for="email">Email</label>
        <input type="text" v-model="email" />
        <p>{{ email }}</p>
        <button @click="setEmailDefault">Reset</button>
        <br/>
        <label for="username">Username</label>
        <input type="text" v-model="username" />
        <p>{{ username }}</p>
        <button @click="setUsernameDefault">Reset</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const email = defineModel("email");
const username = defineModel("username");
const setEmailDefault = () => {
    email.value = "default@gmail.com";
};
const setUsernameDefault = () => {
    username.value = "default.com";
};
</script>