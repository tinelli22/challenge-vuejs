<template>
    <Container>
        <nav>
            <img src="@/assets/svg/logotipo.svg" alt="logotipo">
            <div class="col">
                <div class="user-info">
                    <Icon id="user-icon" name="user-circle" />
                    <span>Octávio Oliveira</span>
                </div>
                <Icon id="exit-icon" name="exit" />
            </div>
        </nav>
    </Container>
</template>

<script>
import Icon from './Icon.vue';
import Container from './Container.vue'

export default {
    name: 'Navbar',
    components: {
        Icon,
        Container
    },
}
</script>

<style scoped>
    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: var(--white);
        color: var(--secondary);
        height: 3.75rem;
        box-sizing: border-box;
    }

    nav img {
        width: 150px;
    }

    nav .col {
        display: flex;
        gap: 6px;
        align-items: center; 
    }

    nav .col .user-info span {
        font-size: 0.75rem;
        line-height: 1;
    }

    nav .col .user-info {
        display: flex;
        gap: 6px;
        align-items: center;
    }
</style>