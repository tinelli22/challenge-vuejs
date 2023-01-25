<template>
  <div class="wrapperFormWallet">
    <h4 class="sub-title">{{ title }}</h4>
    <p class="modal-line"></p>
    <form id="form" @submit="onSubmitForm">
      <Input
        type="text"
        label="Nome"
        name="name"
        required
        :input-fnc="onInput"
        :value="name"
      />
      <Input
        type="text"
        label="Sobrenome"
        name="lastname"
        required
        :input-fnc="onInput"
      />
      <Input
        type="email"
        label="E-mail"
        name="email"
        required
        :input-fnc="onInput"
      />
      <div class="row one">
        <Input
          type="text"
          label="Valor de compra"
          name="wallet"
          required
          :input-fnc="onInput"
        />
        <span class="sub-title">BTC {{ btc }}</span>
      </div>
      <div class="row two">
        <span id="cancel" class="text" @click="closeModal">Cancelar</span>
        <button class="primary text btn-submit" type="submit">
          {{ labelBtn }}
        </button>
      </div>
    </form>
  </div>
</template>
<script>
import Input from "./Input.vue";
import Modal from "./Modal.vue";

export default {
  name: "Form",
  props: {
    title: String,
    labelBtn: String,
    ...Input.props,
    ...Modal.props,
  },
  data: function () {
    return {
      btc: "0",
      inputs: {
        name: "",
        lastname: "",
        email: "",
        wallet: "",
      },
    };
  },
  components: { Input },
  methods: {
    onInput(ev) {
      const target = ev.target;
      const name = target.name;
      this.$data.inputs[name] = name;

      if (name === "wallet") {
        this.$data.btc = target.value || "0";
      }
    },
    onSubmitForm(ev) {
      ev.preventDefault();
      console.log(this.$data);
    },
    closeModal() {
        const modalRef = document.querySelector(`#${this.$props.modalId}`);
        modalRef.classList.remove('open')
    },
  },
};
</script>
<style scoped>
#form {
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.row {
  display: flex;
  align-items: center;
}

.row.one {
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 1rem;
}

.row.two {
  justify-content: flex-end;
  gap: 1rem;
}

#cancel {
  cursor: pointer;
  color: var(--primary);
}

.btn-submit {
  width: 120px;
}
</style>
