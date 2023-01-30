<template>
  <label :for="name">
    <input
      :required="required"
      type="number"
      :name="name"
      :id="name"
      :value="value"
      class="text appearence-off"
      @input="onInput"
      @focus="onFocus"
      @focusout="onFocusOut"
    />
    <span class="label">{{ label }}</span>
  </label>
</template>

<script>
import Input from "./Input.vue";
const focus = new Event("focus");
const formatter = Intl.NumberFormat("pt-br", {
  style: "currency",
  currency: "BRL",
});

export default {
  name: "InputMoney",
  props: {
    ...Input.props,
  },
  mounted: function () {
    const { value, name } = this.$props;

    const isValid = value >= 0;

    if (isValid) {
      const inputRef = document.querySelector(`input#${name}`);
      console.log(inputRef);
      inputRef.dispatchEvent(focus);
    }
  },
  data: function () {
    return {
      dataValue: 0,
    };
  },
  methods: {
    onFocus(ev) {
      const target = ev.target;
      const children = target.parentElement.children;
      const labelRef = children[1];
      target.type='number'
      target.value = this.$data.dataValue;

      labelRef.classList.add("float");
    },
    onFocusOut(ev) {
      const target = ev.target;
      const children = target.parentElement.children;
      const labelRef = children[1];
      this.$data.dataValue = target.value;

      const r = formatter.format(target.value);
      target.type = 'text'
      target.value = r;

      if (!target.value) labelRef.classList.remove("float");
    },
    onInput(ev) {
      const cpy = ev;
      cpy.value = this.dataValue
      this.$props.inputFnc(cpy)
    },
  },
};
</script>

<style scoped>
input {
  padding: 0 10px;
  font-weight: 400;
}
label {
  display: flex;
  align-items: center;
  position: relative;
  border: 1px solid var(--opacity-secondary);
  background: #fff;
  border-radius: 4px;
  width: 100%;
  height: var(--size-btn-input);
}

.label {
  color: var(--secondary);
  font-weight: 400;
  order: 1;
  position: absolute;
  left: 10px;
  transition: all 0.3s;
}

.label.none {
  display: none;
}

.float {
  color: var(--primary);
  font-weight: 700;
  font-size: 9px;
  top: 2px;
}
</style>
