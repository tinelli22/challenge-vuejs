<template>
  <Modal :modal-id="modalId">
    <Form title="Adicionar Carteira" label-btn="adicionar" :modal-id="modalId" />
  </Modal>
</template>
<script>
import Form from "./Form.vue";
import Modal from "./Modal.vue";

export default {
  name: "FormModal",
  components: {
    Modal,
    Form,
  },
  props: {
    ...Modal.props,
    ...Form.props
  },
  methods: {
   
  }
};
</script>
<style></style>
