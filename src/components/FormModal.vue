<template>
  <Modal :modal-id="modalId">
    <h4 class="sub-title">{{ title }}</h4>
    <p class="modal-line"></p>
    <form class="form" @submit="onSubmitForm">
      <Input
        type="text"
        label="Nome"
        required
        :input-fnc="onInput"
        v-bind="nameInput"
      />
      <Input
        type="text"
        label="Sobrenome"
        required
        :input-fnc="onInput"
        v-bind="lastNameInput"
      />
      <Input
        type="email"
        label="E-mail"
        required
        :input-fnc="onInput"
        v-bind="emailInput"
      />
      <div class="flex-row-align-center one">
        <InputMoney
          type="number"
          label="Valor de compra"
          required
          :input-fnc="onInput"
          v-bind="walletInput"
        />
        <span class="sub-title">BTC {{ btc }}</span>
      </div>
      <div class="flex-row-align-center two">
        <span id="cancel" class="text" @click="closeModal">Cancelar</span>
        <button class="primary text btn-submit" type="submit">
          {{ label }}
        </button>
      </div>
    </form>
  </Modal>
</template>
<script>
import Input from "./Input.vue";
import InputMoney from "./InputMoney.vue";
import Modal from "./Modal.vue";

export default {
  name: "FormModal",
  components: {
    Modal,
    Input,
    InputMoney,
  },
  props: {
    ...Modal.props,
    title: String,
    label: String,
    nameInput: {
      type: Object,
      default: function () {
        return {
          name: "name",
          value: "",
        };
      },
    },
    lastNameInput: {
      type: Object,
      default: function () {
        return {
          name: "lastname",
          value: "",
        };
      },
    },
    emailInput: {
      type: Object,
      default: function () {
        return {
          name: "email",
          value: "",
        };
      },
    },
    walletInput: {
      type: Object,
      default: function () {
        return {
          name: "wallet",
          value: null,
        };
      },
    },
    onSubmit: Function,
  },
  data: function () {
    return {
      btc: "0",
    };
  },
  // created: function() {
  //   if(this.$props.walletInput.value) {
  //     this
  //   }
  // },
  methods: {
    onInput(ev) {
      const { name, value } = ev.target;
      if (name === this.walletInput.name) {
        this.calcValueToBtc(value);
      }
    },
    onSubmitForm(ev) {
      ev.preventDefault();
      const [nameRef, lastnameRef, emailRef] = ev.target.children;
      const nome = nameRef.children[0].value;
      const sobrenome = lastnameRef.children[0].value;
      const email = emailRef.children[0].value;

      this.$props.onSubmit({
        nome,
        sobrenome,
        email,
        valor_carteira: this.btc,
      });
    },
    closeModal() {
      const modalRef = document.querySelector(`#${this.$props.modalId}`);
      modalRef.classList.remove("open");
    },
    calcValueToBtc(value) {
      const cambioBtc = 0.0000086;
      const [integer, floats] = value
        .replace("R$", "")
        .replace(".", "")
        .split(",");
      const valparsed = parseFloat(`${integer}.${floats}`);
      this.btc = cambioBtc * valparsed;
    },
  },
};
</script>
<style scoped>
.form {
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.one {
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 1rem;
}

#cancel {
  cursor: pointer;
  color: var(--primary);
}

.two {
  justify-content: flex-end;
  gap: 1rem;
}

.btn-submit {
  width: 120px;
  text-align: center;
}

.form.disabled .btn-submit {
  opacity: 0.7;
  background: var(--tertiary);
}
</style>
