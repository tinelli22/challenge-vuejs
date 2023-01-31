<template>
   <Container class="wrapperFilters">
        <form id="filters" @submit="onSubmitForm">
            <Input type="text" label="Nome" name="namef" :value="namef" :input-fnc="onInput" />
            <Input type="text" label="Sobrenome" name="lastnamef" :value="lastnamef" :input-fnc="onInput" />
            <Input type="email" label="E-mail" name="emailf" :value="emailf" :input-fnc="onInput" />
            <button type="submit" id="btn" class="outline-primary text flex-row-align-center">
                <Icon name="magnifying-glass" />
                Buscar
            </button>
        </form>
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
    data: function() {
        return {
            namef: '',
            lastnamef: '',
            emailf: ''
        }
    },
    props: {
        onSubmit: Function
    },
    methods: {
        onInput(ev) {
            const { name, value } = ev.target;
            this.$data[name] = value;
        },
        onSubmitForm(ev) {
            ev.preventDefault();
            const { namef, lastnamef, emailf } = this.$data
            this.$props.onSubmit({ nome: namef, sobrenome: lastnamef, email: emailf})
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

    #btn {
        justify-content: center;
        text-align: center;
        gap: 0.5rem;
    }
</style>