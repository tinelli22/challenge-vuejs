<template>
    <div id="layout">
        <Navbar />
        <main>
            <slot></slot>
        </main>
    </div>
</template>

<script>
import Navbar from './Navbar.vue';

export default {
    name: "Layout",
    components: {
        Navbar
    }
}
</script>

<style scoped>
    main {
        background: var(--tertiary);
    }
</style>