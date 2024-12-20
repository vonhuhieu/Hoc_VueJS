<script setup>

const sayHi1 = () => {
  alert(`Xin chao 1`)
};

const sayHi2 = () => {
  alert(`Xin chao 2`);
};

const submit = () => {
  alert("form submitted");
};
</script>

<template>
  <div>
    <h1>hello world</h1>
    <!-- click vao nut 2 se chi goi ham tai nut 2, khong anh huong den nut 1 -->
    <button @click.self="sayHi1">
      <button @click.self="sayHi2">say hi 2</button>
      say hi 1
    </button>
    <!-- <form @submit.prevent.stop="submit">
      <button type="submit">submit</button>
    </form> -->

  </div>
</template>

<style></style>