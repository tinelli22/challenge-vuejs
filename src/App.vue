<template>
  <div id="app">
    <Layout>
     
     <Filters />
     <custom-input></custom-input>
    </Layout>
  </div>
</template>

<script>

import './global/styles/index.css';
import Layout from './components/Layout.vue';
import Filters from './components/Filters.vue';

export default {
  name: 'App',
  components: {
    Layout,
    Filters
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
}
</style>
