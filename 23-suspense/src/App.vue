<script setup>
import AsyncComponent from './components/AsyncComponent.vue';


</script>

<template>
  <div>
    <h1>hello world</h1>
    <Suspense>
      <template #default>
        <AsyncComponent />
      </template>
      <template #fallback>
        <p>loading</p>
      </template>
    </Suspense>
  </div>
</template>

<style></style>