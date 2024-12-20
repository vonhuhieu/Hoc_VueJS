<script setup>
import { computed, reactive, ref } from 'vue';

  const isActive = ref(true);
  const hasError = ref(true);
  const errorClass = ref('has-error');
  // const classObject = reactive({
  //   active: true,
  //   'has-error': true
  // });
  const classObject = computed(() =>({
    active: isActive.value,
    'has-error': hasError.value
  }))
  const changeActive = () => {
    isActive.value = !isActive.value;
  };
</script>

<template>
  hello world
  <br/>
  <button @click="changeActive" class="button" v-bind:class="classObject">{{ isActive ? "Active" : "DeActive" }}</button>
  <button @click="changeActive" class="button" v-bind:class="[isActive ? 'active' : '', {'has-error': hasError}]">{{ isActive ? "Active" : "DeActive" }}</button>
</template>

<style>
.button{
  border: none;
  background-color: #8b5cf6;
  color: #ede9fe;
  padding: 10px 14px;
  border-radius: 6px;
  cursor: pointer;
  &:hover{
    background-color: #c7d2fe;
  }
}

.active{
  background-color: #8b5cf6;
  color: #ede9fe;
  &:hover{
    background-color: #818cf8;
  }
}

.has-error{
  background-color: #ef4444;
  color: #fee2e2;
  &:hover{
    background-color: #f87171;
  }
}
</style>