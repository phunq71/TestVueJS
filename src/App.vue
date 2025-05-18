<script setup>
 import Menu from './components/Menu.vue'
 import router from './router/index.js';
 import Footer from './components/Footer.vue';
</script>

<template>
    <Menu/>
    <router-view/>
    <Footer/>
</template>

<style scoped>
</style>
