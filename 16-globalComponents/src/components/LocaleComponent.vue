<template>
    <p>Locale: {{ locale }}</p>
    <button @click="updateLocale">Update locale</button>
</template>

<script setup>
import { inject } from 'vue';

// const locale = inject("locale");
const { locale, updateLocale } = inject("locale", {
    locale: "japan"
});
</script>