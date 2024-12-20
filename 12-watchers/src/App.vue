<script setup>
import { ref, watch } from 'vue';

const count = ref(0);

const increment = () => {
  count.value++;
};

watch(count, (newValue, oldValue) => {
  console.log(`Count thay doi tu ${oldValue} sang ${newValue}`);
}) 

const question = ref("");

const isLoading = ref(false);

const answer = ref("");

watch(question, async (newQuestion, oldQuestion) => {
  if(newQuestion.includes("?")){
    isLoading.value = true;
    answer.value = "Dang suy nghi";
    try {
      const response = await fetch('https://yesno.wtf/api');
      answer.value = (await response.json()).answer;
    }
    catch(error){
      error.value = "Error!Khong the call api";
    }
    finally{
      isLoading.value = false;
    }
  }
})
</script>

<template>
  <div>
    <h1>hello world</h1>
    <h1>Matchers</h1>
    <h1>{{ count }}</h1>
    <button @click="increment">Increment</button>
    <p>Hoi mot cau hoi co the tra loi bang "yes" hoac "no"</p>
    <input v-model="question" v-bind:disabled="isLoading"/>
    <p>{{ answer }}</p>
  </div>
</template>

<style></style>