<template>
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
</template>

<script>
import Icon from './Icon.vue';

export default {
    name: 'Navbar',
    components: {
        Icon
    },
}
</script>

<style scoped>
    nav {
        background: var(--white);
        color: var(--secondary);
    }

    nav img {
        width: 200px;
    }
</style>