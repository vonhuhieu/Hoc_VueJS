<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { defineAsyncComponent, provide, ref, watchEffect } from 'vue';
import LoadingComponent from './components/LoadingComponent.vue';
import ErrorComponent from './components/ErrorComponent.vue';

const email = ref("");
const username = ref("");

watchEffect(() => {
  console.log(email.value);
});

const changeEmailDefaultFromParent = () => {
  email.value = "parent@gmail.com";
};

const changeUsernameDefaultFromParent = () => {
  username.value = "parent";
};

const currentLocale = ref("vietnam");

const changeCurrentLocale = () => {
  currentLocale.value = "USSR";
};

const updateCurrentLocale = () => {
  currentLocale.value = "Russia";
};

provide("locale", {
  locale: currentLocale,
  updateLocale: updateCurrentLocale,
});

const ComponentVModel = defineAsyncComponent({
  loader: () => import('./components/ComponentVModel.vue'),
  loadingComponent: LoadingComponent,
  errorComponent: ErrorComponent,
});
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <ComponentVModel v-model:email="email" v-model:username.capitalize="username" />
      <button @click="changeEmailDefaultFromParent">changeEmailDefaultFromParent</button>
      <button @click="changeUsernameDefaultFromParent">changeUsernameDefaultFromParent</button>
      <button @click="changeCurrentLocale">Change currentLocale</button>
      <HelloWorld msg="You did it!" />
      <ComponentA />
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
