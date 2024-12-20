<script setup>
import { ref } from 'vue';

const isLoggedIn = ref(true);

const handleLogin = () => {
  isLoggedIn.value = !isLoggedIn.value;
};

const userStatus = ref('online');

const changeStatus = () => {
  if (userStatus.value === 'online') {
    userStatus.value = 'away';
  }
  else if (userStatus.value === 'away') {
    userStatus.value = 'busy';
  }
  else if (userStatus.value === 'busy') {
    userStatus.value = 'online';
  }
};

const isVisible = ref(true);

const handleVisible = () => {
  isVisible.value = !isVisible.value
};
</script>

<template>
  hello world
  <h1 v-if="isLoggedIn">Chao mung nguoi dung da dang nhap</h1>
  <h1 v-else>Chao mung khach</h1>
  <button @click="handleLogin">{{ isLoggedIn ? "Dang xuat" : "Dang nhap" }}</button>
  <h1 v-if="userStatus === 'online'">Nguoi dung dang online</h1>
  <h1 v-else-if="userStatus === 'away'">Nguoi dung dang vang mat</h1>
  <h1 v-else-if="userStatus === 'busy'">Nguoi dung dang ban</h1>
  <h1 v-else>Khong ro trang thai</h1>
  <button @click="changeStatus">Thay doi trang thai</button>
  <br />
  <h1 v-show="isVisible">Noi dung nay an hoac hien thi</h1>
  <button @click="handleVisible">{{ isVisible ? "An" : "Hien thi" }}</button>
</template>

<style></style>