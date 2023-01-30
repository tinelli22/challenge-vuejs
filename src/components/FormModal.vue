<template>
  <Modal :modal-id="modalId">
    <h4 class="sub-title">{{ title }}</h4>
    <p class="modal-line"></p>
    <form class="form" @submit="onSubmit">
    <Input
      type="text"
      label="Nome"
      name="name"
      required
      :input-fnc="onInput"
      :value="nameValue"
    />
    <Input
      type="text"
      label="Sobrenome"
      name="lastname"
      required
      :input-fnc="onInput"
      :value="lastNameValue"
    />
    <Input
      type="email"
      label="E-mail"
      name="email"
      required
      :input-fnc="onInput"
      :value="emailValue"
    />
    <div class="flex-row-align-center one">
      <InputMoney
        type="number"
        label="Valor de compra"
        name="wallet"
        required
        :input-fnc="onInput"
        :value="walletValue"
      />
      <span class="sub-title">BTC {{ btc }}</span>
    </div>
    <div class="flex-row-align-center two">
      <span id="cancel" class="text">Cancelar</span>
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
    InputMoney
},
  props: {
    ...Modal.props,
    title: String,
    label: String,
    nameValue: {
      type: String,
      default: ''
    },
    lastNameValue: {
      type: String,
      default: ''
    },
    emailValue: {
      type: String,
      default: ''
    },
    walletValue: {
      type: Number,
      default: 0
    },
    submit: Function
  },
  data: function () {
    return {
      btc: "0",
      inputsRef: {}
    };
  },
  methods: {
    onInput(ev) {
      const target = ev.target;
      const name = target.name;
      this.inputsRef[name] = ev.target.value;
  
      if (name === "wallet") {
        this.btc = target.value || "0";
      }
    },
    onSubmit(ev) {
      ev.preventDefault();
      ev.target.classList.add('disabled')
      const values = Object.values(this.inputsRef);
      this.$props.submit(values)
      
    }
  }
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
