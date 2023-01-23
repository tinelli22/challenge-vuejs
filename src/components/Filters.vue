<template>
   <Container >
        <div id="filters">
            <Input type="text" label="Nome" name="name"/>
            <Input type="text" label="Sobrenome" name="lastname"/>
            <Input type="email" label="E-mail" name="email"/>
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
    }
}
</script>

<style scoped>
    #filters {
        background: #fff;
        border-radius: 8px;
        display: grid;
        grid-template-columns: 1fr 1fr 1.5fr 85px;
        gap: 1rem;
    }   
</style>