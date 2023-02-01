<template>
  <div>
    <Container>
      <div class="wrapperTableWallets">
        <div class="row flex-row-align-center flex-justify-between">
          <span class="sub-title">Carteiras</span>
          <button class="outline-primary text">Exportar CSV</button>
        </div>
        <ul class="table">
          <li class="table-header grid-columns">
            <span class="text">Nome</span>
            <span class="text">Sobrenome</span>
            <span class="text">Email</span>
            <span class="text">Bitcoin</span>
            <span class="text"></span>
          </li>
          <li class="line"></li>
          <li
            :key="wa.id"
            class="table-item grid-columns"
            v-for="wa in wallets"
          >
            <span class="text">{{ wa.nome }}</span>
            <span class="text">{{ wa.sobrenome }}</span>
            <span class="text">{{ wa.email }}</span>
            <span class="text">{{ wa.valor_carteira }}</span>
            <span class="text flex-row-align-center icons">
              <div @click="setWallet(wa)">
                <Icon name="pencil" />
              </div>
              <div @click="setWalletId(wa.id)">
                <Icon name="trash" />
              </div>
            </span>
          </li>
          <li class="line second"></li>
        </ul>
        <p class="line third"></p>
        <div class="row flex-row-align-center flex-justify-between">
          <span class="text records">{{ totalRecords }} registro(s)</span>
        </div>
      </div>
    </Container>
    <FormModal
      v-bind="formModal"
      :name-input="nameValue"
      :email-input="emailValue"
      :last-name-input="lastNameValue"
      :wallet-input="walletValue"
      :on-submit="updateWallet"
    />
    <Modal :modal-id="deleteModal.modalId">
        <h4 class="sub-title">Tem certeza que quer remover?</h4>
        <div class="row-modal-delete flex-row-align-center">
          <button class="outline-primary text" type="button" @click="toggleModal(deleteModal.modalId)">Cancelar</button>
          <button class="primary text confirm" type="button" @click="deleteWallet">Sim</button>
        </div>
    </Modal>
  </div>
</template>
<script>
import Container from "./Container.vue";
import FormModal from "./FormModal.vue";
import Modal from "./Modal.vue";
import Icon from "./Icon.vue";
import { deleteWalletService, updateWalletService } from "../services/walletService";

export default {
  name: "Table",
  props: {
    wallets: {
      type: Array,
      default: () => [],
    },
    totalRecords: {
      type: Number,
      default: 0,
    },
  },
  data: function () {
    return {
      formModal: {
        modalId: "updateModal",
        title: "Atualizar Carteira",
        label: "Atualizar",
      },
      nameValue: {
        name: "namee",
        value: "",
      },
      lastNameValue: {
        name: "lastnamee",
        value: "",
      },
      emailValue: {
        name: "emaile",
        value: "",
      },
      walletValue: {
        name: "wallete",
        value: 0,
      },
      deleteModal: {
        modalId: "deleteModal",
        walletId: ''
      }
    };
  },
  methods: {
    toggleModal(id) {
    
      const modalRef = document.querySelector(`#${id}`);
      modalRef.classList.toggle("open");
    },
    setWallet(wallet) {
      const { nome, sobrenome, email, valor_carteira } = wallet;
      
      this.nameValue = {
        ...this.nameValue,
        value: nome,
      };
      this.lastNameValue = {
        ...this.lastNameValue,
        value: sobrenome,
      };
      this.emailValue = {
        ...this.emailValue,
        value: email,
      };
      this.walletValue = {
        ...this.walletValue,
        value: valor_carteira,
      };
      
      this.toggleModal(this.formModal.modalId);
    },
    setWalletId(id) {
      this.deleteModal.walletId = id;
      this.toggleModal(this.deleteModal.modalId)
    },
    async updateWallet(wallet) {
      //not tested
      const resp = await updateWalletService(wallet);
      console.log(resp);
    },
    async deleteWallet() {
      try {
       await deleteWalletService(this.deleteModal.walletId);
      } catch (err) {
        console.error(err);
      }
    }
  },
  components: { Container, Icon, FormModal, Modal },
};
</script>
<style scoped>
.wrapperTableWallets {
  padding: var(--size-padding-x);
  background: #fff;
  border-radius: 8px;
  padding: var(--size-padding) 0;
}

.row {
  padding: 0 var(--size-padding) var(--size-padding);
}

.table {
  padding: 0 var(--size-padding);
}

.line {
  display: block;
  height: 1px;
  background: var(--opacity-secondary);
  margin: 1rem 0 0;
}

.line.second {
  margin: 0;
}
.line.third {
  margin: 1.5rem 0;
}

.grid-columns {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 1fr 1fr;
}

.table-item {
  height: 3rem;
  background: transparent;
}

.table-item .text,
.records {
  font-weight: 400;
}

.table-item,
.table-header,
.icons {
  padding: 0 0.5rem;
}

.table-item span {
  align-self: center;
}

.table-item:hover {
  border-left: 2px solid var(--primary);
  background: var(--opacity-hover-primary);
}

.table-item:nth-child(even) {
  background: var(--tertiary);
}

.icons {
  height: 100%;
  justify-content: flex-end;
  gap: 1.5rem;
}

.row-modal-delete {
  padding: var(--size-padding) 0;
  gap: 1rem;
}

.confirm {
  width: 80px;
  text-align: center;
}
</style>
