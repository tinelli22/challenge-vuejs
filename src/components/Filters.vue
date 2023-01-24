<template>
   <Container class="wrapperFilters">
        <div id="filters">
            <Input type="text" label="Nome" name="namef" :input-fnc="inputName" />
            <Input type="text" label="Sobrenome" name="lastname" />
            <Input type="email" label="E-mail" name="email" />
            <button id="btn" class="outline-primary">
                <Icon name="magnifying-glass" />
                Buscar
            </button>
        </div>
   </Container> 
</template>

<script>
import Input from './Input.vue'
import Container from './Container.vue';
import Icon from './Icon.vue';

export default {
    name: "Filters",
    components: {
        Input,
        Container,
        Icon
    },
    methods: {
        inputName(ev) {
            console.log(ev)
        }
    }
}
</script>

<style scoped>
    .wrapperFilters {
        background: #fff;
        padding: var(--size-padding);
        border-radius: 8px;
    }

    #filters {
        display: grid;
        grid-template-columns: 1fr 1fr 1.5fr 120px;
        gap: 1rem;
    }   
</style>