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
        <TableWallets class="shadow-1" :wallets="wallets" />
      </div>
    </Layout>
    <FormModal v-bind="modal" :submit="addWallet"/>
  </div>
</template>

<script>
import "./global/styles/index.css";
import Layout from "./components/Layout.vue";
// import Filters from "./components/Filters.vue";
import Container from "./components/Container.vue";
import FormModal from "./components/FormModal.vue";
import TableWallets from "./components/TableWallets.vue";
import api from '../api/data.json'
import { saveWalletService } from './services/walletService'

export default {
  name: "App",
  components: {
    Layout,
    //Filters,
    Container,
    FormModal,
    TableWallets,
  },
  data: function() {
    return {
      modal: {
        modalId: "add-modal",
        title: 'Adicionar Carteira',
        label: 'Adicionar'
      },
      wallets: [
        {
          id: 4,
          nome: "Dael",
          sobrenome: "Tunder",
          email: "dtunder3@youku.com",
          endereco: "7 Vera Court",
          data_nascimento: "1983-09-20T19:50:22Z",
          data_abertura: "2018-04-20T00:25:53Z",
          valor_carteira: 0.64670558,
          endereco_carteira: "1HQ84PuJNsyoEZFMLcy5U4dQHYntHaV39Y",
        },
        {
          id: 5,
          nome: "Abbey",
          sobrenome: "Fairley",
          email: "afairley4@cnn.com",
          endereco: "7 Vahlen Street",
          data_nascimento: "1994-03-30T00:26:32Z",
          data_abertura: "2020-07-09T07:03:17Z",
          valor_carteira: 1.95851203,
          endereco_carteira: "1CHPiiAjWjS1wx2MBLSLCRA7jsdaoZUFPu",
        },
      ],
    };
  },
  methods: {
    toggleModal() {
      const modalRef = document.querySelector(`#${this.$data.modal.modalId}`);
      modalRef.classList.toggle("open");
    },
    async addWallet(values) {
      try {
        const wallet = {
         id: api.users.length + 1,
         data_abertura: new Date().toISOString(),
         nome: `${values[0]} ${values[1]}`,
         email: values[2],
         valor_carteira: parseInt(values[3])
        }

        const resp = await saveWalletService(wallet);
        console.log(resp);
        
      } catch (err) {
        console.error(err);
      }


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
