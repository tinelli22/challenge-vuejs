<template>
  <div id="app">
    <Layout>
       i'm slot
    </Layout>
  </div>
</template>

<script>

import './global/styles/colors.css';
import Layout from './components/Layout/Layout.vue';

export default {
  name: 'App',
  components: {
    Layout
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
