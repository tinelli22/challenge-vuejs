<template>
    <div id="layout">
        <Navbar />
        <main>
            <slot></slot>
        </main>
    </div>
</template>

<script>
import Navbar from '../Navbar/Navbar.vue';

export default {
    name: "Layout",
    components: {
        Navbar
    }
}
</script>

<style>
    main {
        background: var(--tertiary);
    }
</style>