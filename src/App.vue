<template>
  <div id="app">
    <Layout>
      <Container class="wrapperAddWallet">
        <h2 class="title">BTC Carreiras</h2>
        <button class="primary" id="btn" @click="openModal">Adicionar Carteira</button>
      </Container>
      <Filters />
    </Layout>
    <FormModal :modal-id="modalId" />
  </div>
</template>

<script>
import "./global/styles/index.css";
import Layout from "./components/Layout.vue";
import Filters from "./components/Filters.vue";
import Container from "./components/Container.vue";
import FormModal from "./components/FormModal.vue";

export default {
  name: "App",
  components: {
    Layout,
    Filters,
    Container,
    FormModal
},
  data: () => {
    return {
      modalId: 'add-modal'
    }
  },
  methods: {
    openModal() {
      const modalRef = document.querySelector(`#${this.$data.modalId}`);
      modalRef.classList.add('open')
    }
  }
};
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
