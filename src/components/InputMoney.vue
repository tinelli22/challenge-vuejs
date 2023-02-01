<template>
  <Input
    type="text"
    :label="label"
    :required="required"
    :name="name"
    :value="value"
    :input-fnc="onInput"
  />
</template>

<script>
import Input from "./Input.vue";

const formatter = Intl.NumberFormat("pt-br", {
  style: "currency",
  currency: "BRL",
});

export default {
  name: "InputMoney",
  props: {
    ...Input.props,
  },
  data: function () {
    return {
      valueData: this.value,
    };
  },

  methods: {
    onInput(ev) {
      const onlyDigits = ev.target.value
        .split("")
        .filter((s) => /\d/.test(s))
        .join("")
        .padStart(3, "0");

      const digitsFloat = onlyDigits.slice(0, -2) + "." + onlyDigits.slice(-2);
      ev.target.value = formatter.format(digitsFloat);
      this.$props.inputFnc(ev);
    },
  },
  components: {
    Input,
  },
};
</script>
