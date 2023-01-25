<template>
  <i v-bind:class="name"></i>
</template>

<script>
export default {
  props: {
    name: String,
  },
};
</script>

<style scoped>
i {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: "icomoon" !important;
  speak: never;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  cursor: pointer;

  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.pencil:before {
  content: "\e900";
}
.magnifying-glass:before {
  content: "\e901";
}
.chevron-left:before {
  content: "\e902";
}
.chevron-right:before {
  content: "\e903";
}
.trash:before {
  content: "\e904";
}
.exit:before {
  content: "\e905";
}
.user-circle:before {
  content: "\e906";
}
</style>
