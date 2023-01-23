<template>
  <div id="app">
    <Layout>
      <Container class="wrapperAddWallet">
        <h2 id="title">BTC Carreiras</h2>
        <button class="primary" id="btn">Adicionar Carteira</button>
      </Container>
     <Filters />
    </Layout>
  </div>
</template>

<script>

import './global/styles/index.css';
import Layout from './components/Layout.vue';
import Filters from './components/Filters.vue';
import Container from './components/Container.vue';

export default {
  name: 'App',
  components: {
    Layout,
    Filters,
    Container
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

.wrapperAddWallet {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
