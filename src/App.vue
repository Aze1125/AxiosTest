<template>
  <div id="app">
    <nav-box />
    <router-view />
  </div>
</template>

<script>
import Vue from 'vue'
import NavBox from "./components/Navigation/NavBox";

export default {
  name: "App",
  components: {
    NavBox,
  },
  mounted() {
    Vue.prototype.$alert = this.$refs.alert;
  },
};
</script>

<style>
@import "./assets/css/page.css";
</style>
