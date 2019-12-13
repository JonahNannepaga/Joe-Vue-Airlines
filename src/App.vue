<template>
  <div id="app">
    <header-component></header-component>
    <main-component></main-component>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Main from "./components/MainComponent.vue";

export default {
  name: "app",
  components: {
    "header-component": Header,
    "main-component": Main
  }
};
</script>

<style>
#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  margin: 0;
}
</style>
