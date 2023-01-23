<template>
  <label :for="name">
    <input
      :type="type"
      :name="name"
      class="text"
      @input="inputFnc"
      @focus="onFocus"
      @focusout="onFocusOut"
    />
    <span class="label">{{ label }}</span>
  </label>
</template>

<script>
export default {
  name: "Input",
  props: {
    label: String,
    type: String,
    name: String,
    inputFnc: Function
  },
  methods: {
    onFocus: (ev) => {
      const target = ev.target;
      const children = target.parentElement.children;
      const labelRef = children[1];
      labelRef.classList.add("float");
    },
    onFocusOut: (ev) => {
      const target = ev.target;
      const children = target.parentElement.children;
      const labelRef = children[1];
      if (target.value.length === 0) labelRef.classList.remove("float");
    },
  },
};
</script>

<style scoped>
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
  font-size: 0.875rem;
  order: 1;
  position: absolute;
  left: 10px;
  transition: all 0.3s;
}

.text {
  padding: 10px;
  order: 2;
  appearance: none;
  border: none;
  width: 100%;
  height: 100%;
}

.float {
  color: var(--primary);
  font-weight: 700;
  font-size: 9px;
  top: 2px;
}
</style>
