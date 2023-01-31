<template>
  <div id="app">
    <Layout>
      <Container
        class="wrapperAddWallet flex-row-align-center flex-justify-between"
      >
        <h2 class="title">BTC Carreiras</h2>
        <button class="primary" id="btn" @click="toggleModal">
          Adicionar Carteira
        </button>
      </Container>
      <div class="row flex-column">
        <!-- <Filters class="shadow-1" /> -->
        <TableWallets
          v-if="wallets.length > 0"
          class="shadow-1"
          :wallets="wallets"
        />
      </div>
    </Layout>
    <FormModal v-bind="modal" :submit="addWallet" />
  </div>
</template>

<script>
import "./global/styles/index.css";
import Layout from "./components/Layout.vue";
// import Filters from "./components/Filters.vue";
import Container from "./components/Container.vue";
import FormModal from "./components/FormModal.vue";
import TableWallets from "./components/TableWallets.vue";
import api from "../api/data.json";
import { postWalletService, getWalletsService } from "./services/walletService";

export default {
  name: "App",
  components: {
    Layout,
    //Filters,
    Container,
    FormModal,
    TableWallets,
  },
  data: function () {
    return {
      modal: {
        modalId: 'modal',
        title: "Adicionar Carteira",
        label: "Adicionar",
      },
      wallets: [],
    };
  },
  mounted: async function () {
    this.wallets = await this.get();
  },
  methods: {
    toggleModal() {
      const modalRef = document.querySelector(`#${this.modal.modalId}`);
      modalRef.classList.toggle("open");
    },
    async addWallet(values) {
      try {
        const [nome, sobrenome, email, valor_carteira] = values;
        const wallet = {
          id: api.users.length + 1,
          data_abertura: new Date().toISOString(),
          nome,
          sobrenome,
          email,
          valor_carteira: parseInt(valor_carteira),
        };

        const resp = await postWalletService(wallet);
        console.log(resp);
      } catch (err) {
        console.error(err);
      }
    },
    async get() {
      try {
        const result = await getWalletsService();
        this.wallets = result;
      } catch (err) {
        console.error(err);
      }
    },
  },
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
  padding: 2rem 0 1.5rem;
}

.row {
  gap: 1rem;
}
</style>
