<template>
  <div>
    <Container>
      <div class="wrapperTableWallets">
        <div class="row flex-row-align-center flex-justify-between">
          <span class="sub-title">Carteiras</span>
          <button class="outline-primary text">Exportar CSV</button>
        </div>
        <ul class="table">
          <li class="table-header grid-columns">
            <span class="text">Nome</span>
            <span class="text">Sobrenome</span>
            <span class="text">Email</span>
            <span class="text">Bitcoin</span>
            <span class="text"></span>
          </li>
          <li class="line"></li>
          <li :key="wa.id" class="table-item grid-columns" v-for="wa in wallets">
            <span class="text">{{ wa.nome }}</span>
            <span class="text">{{ wa.sobrenome }}</span>
            <span class="text">{{ wa.email }}</span>
            <span class="text">{{ wa.valor_carteira }}</span>
            <span class="text flex-row-align-center icons">
              <Icon name="pencil" />
              <Icon name="trash" />
            </span>
          </li>
          <li class="line second"></li>
        </ul>
        <p class="line third"></p>
        <div class="row flex-row-align-center flex-justify-between">
          <span class="text records">{{ totalRecords }} registro(s)</span>
         
        </div>
      </div>
    </Container>
  </div>
</template>
<script>
import Container from "./Container.vue";
import Icon from "./Icon.vue";

export default {
  name: "Table",
  props: {
    wallets: {
      type: Array,
      default: () => [],
    },
    totalRecords: {
      type: Number,
      default: 0
    }
  },
  components: { Container, Icon },
};
</script>
<style scoped>
.wrapperTableWallets {
  padding: var(--size-padding-x);
  background: #fff;
  border-radius: 8px;
  padding: var(--size-padding) 0;
}

.row {
  padding: 0 var(--size-padding) var(--size-padding);
}

.table {
  padding: 0 var(--size-padding)
}

.line {
  display: block;
  height: 1px;
  background: var(--opacity-secondary);
  margin: 1rem 0 0;
}

.line.second {
  margin: 0;
}
.line.third {
  margin: 1.5rem 0;
}

.grid-columns {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 1fr 1fr;
}

.table-item {
  height: 3rem;
  background: transparent;
}

.table-item .text,
.records {
  font-weight: 400;
}

.table-item,
.table-header,
.icons {
  padding: 0 0.5rem;
}

.table-item span {
  align-self: center;
}

.table-item:hover {
  border-left: 2px solid var(--primary);
  background: var(--opacity-hover-primary);
}

.table-item:nth-child(even) {
  background: var(--tertiary);
}

.icons {
  height: 100%;
  justify-content: flex-end;
  gap: 1.5rem;
}

</style>
