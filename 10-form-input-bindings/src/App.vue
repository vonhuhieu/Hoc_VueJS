<script setup>
import { ref } from 'vue';

const text = ref('hello');

const multilineText = ref("");

const checked = ref();

const checkedNames = ref([]);

const radioChecked = ref();

const selected = ref();

const firstOption = ref("first option");
const secondOption = ref("second option");
const thirdOption = ref("third option");

</script>

<template>
  <div>
    <h1>hello world</h1>
    <p>Text: {{ text }}</p>
    <input v-model="text" />
    <br />

    <p>Multiline text: {{ multilineText }}</p>
    <textarea v-model="multilineText" placeholder="Input your message" />

    <p>Checkbox: {{ checked }}</p>
    <input type="checkbox" id="a" v-model="checked" true-value="yes" false-value="no" />

    <p>Multiple Checkbox: {{ checkedNames }}</p>
    <input type="checkbox" id="a" v-model="checkedNames" v-bind:value="firstOption" />
    <label for="a">A</label>

    <input type="checkbox" id="b" v-model="checkedNames" v-bind:value="secondOption" />
    <label for="b">B</label>

    <input type="checkbox" id="c" v-model="checkedNames" v-bind:value="thirdOption" />
    <label for="c">C</label>

    <p>Radio: {{ radioChecked }}</p>
    <input type="radio" id="a" v-model="radioChecked" value="A" />
    <label for="a">A</label>

    <input type="radio" id="b" v-model="radioChecked" value="B" />
    <label for="b">B</label>

    <input type="radio" id="c" v-model="radioChecked" value="C" />
    <label for="c">C</label>

    <p>Select: {{ selected }}</p>
    <select v-model="selected">
      <option disabled value="">Please select one</option>
      <option v-bind:value="{ name: 'A' }">A</option>
      <option>B</option>
      <option>C</option>

    </select>
  </div>
</template>

<style></style>