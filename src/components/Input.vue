<template>
  <label :for="name">
    <input
      :required="required"
      :type="type"
      :name="name"
      :value="value"
      :id="name"
      class="text appearence-off"
      @input="inputFnc"
      @focus="onFocus"
      @focusout="onFocusOut"
    />
    <span  class="label">{{ label }}</span>
  </label>
</template>

<script>
export default {
  name: "Input",
  props: {
    label: String,
    type: {
      default: 'text',
      type: String
    },
    value: {
      default: '',
      type: String
    },
    name: String,
    required: {
      default: false,
      type: Boolean
    },
    inputFnc: Function
  },
  mounted: function() {
    const { value, name } = this.$props

    if(value.length > 0) {
      const inputRef = document.querySelector(`input#${name}`);
      const focus = new Event('focus');
      inputRef.dispatchEvent(focus);
      
    }
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
input {
  padding: 0 10px;
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
