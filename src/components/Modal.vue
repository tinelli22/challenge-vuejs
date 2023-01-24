<template>
  <div :id="modalId" class="modal">
    <div class="modal-background" @click="closeModal"></div>
    <div class="modal-container">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "Modal",
  props: {
    modalId: {
      required: true,
      type: String
    }
  },
  methods: {
    closeModal(ev) {
      const parentEl = ev.target.parentElement;
      parentEl.classList.remove("open");
    },
  },
};
</script>
<style></style>
