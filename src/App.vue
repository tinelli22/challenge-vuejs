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
        <Filters class="shadow-1" :on-submit="onSubmitFilters" />
        <TableWallets
          v-if="wallets.length > 0"
          class="shadow-1"
          :wallets="wallets"
        />
      </div>
    </Layout>
    <FormModal v-bind="modal" :on-submit="addWallet" />
  </div>
</template>

<script>
import "./global/styles/index.css";
import Layout from "./components/Layout.vue";
import Filters from "./components/Filters.vue";
import Container from "./components/Container.vue";
import FormModal from "./components/FormModal.vue";
import TableWallets from "./components/TableWallets.vue";
import api from "../api/data.json";
import { postWalletService, getWalletsService } from "./services/walletService";

export default {
  name: "App",
  components: {
    Layout,
    Filters,
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
    this.wallets = await this.getWallets();
  },
  methods: {
    toggleModal() {
      const modalRef = document.querySelector(`#${this.modal.modalId}`);
      modalRef.classList.toggle("open");
    },
    async addWallet(values) {
      try {
        const { nome, sobrenome, email, valor_carteira} = values;
        const wallet = {
          id: api.users.length + 1,
          data_abertura: new Date().toISOString(),
          nome,
          sobrenome,
          email,
          valor_carteira,
        };

        await postWalletService(wallet);
      } catch (err) {
        console.error(err);
      }
    },
    async getWallets(filters, pagination) {
      try {
        const result = await getWalletsService(filters, pagination);
        this.wallets = result;
      } catch (err) {
        console.error(err);
      }
    },
    onSubmitFilters(obj) {
      this.getWallets(obj)
    }
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
