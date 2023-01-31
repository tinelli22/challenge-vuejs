<template>
  <Input 
  type="number" 
  :label="label" 
  :required="required" 
  :name="name"
  :value="value"
  :input-fnc="input"
   />
</template>

<script>
import Input from "./Input.vue";
// const focus = new Event("focus");
// const formatter = Intl.NumberFormat("pt-br", {
//   style: "currency",
//   currency: "BRL",
// });

export default {
  name: "InputMoney",
  props: {
    ...Input.props,
  },
  methods: {
    input(ev) {

      console.log(ev.target)
    }
  },
  components: {
    Input
  }
};
</script>
