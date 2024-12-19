<script setup>
const message = "hello world123!";
const rawHtml = '<span style="color: red;">This should be red</span>'
const idButton = "idOfButton";
const classButton = "classOfButton";
const isDisabled = 1;
const objOfAttrs = {
  id: "idOfSecondButton",
  class: "classOfSecondButton",
  disabled: true,
  style: {
    color: "red",
    fontWeight: "bolder",
    textDecoration: "underline"
  },
};
const number = 1;
const listString = '1,2,3,4,5';
const convertToId = (data) => data.split(',').reverse().join('-');
const attribute = "href";
const url = "link";
</script>

<template>
  <h1>{{ message }}</h1>
  <div v-html="rawHtml"></div>
  <button v-bind:id="idButton" v-bind:class="classButton" v-bind:disabled="isDisabled">click here</button>
  <button v-bind="objOfAttrs">click me</button>
  <button>Number: {{ number * 3 }}</button>
  <button v-bind:disabled="isDisabled">{{ isDisabled ? "disabled" : "click me please" }}</button>
  <button v-bind:id="listString.split(',').join('-')">Number: {{ number * 7 }}</button>
  <button v-bind:id="convertToId(listString)">Number: {{ number * 8 }}</button>
  <a v-bind:[attribute]="url">link</a>
</template>
