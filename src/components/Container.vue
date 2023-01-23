<template>
    <div id="container">
        <slot></slot>
    </div>
</template>

<script>

export default {
    name: "Container"
}
</script>

<style scoped>
    #container {
        width: 1440px;
        margin: 0 auto;
        padding: 0 1.5rem;
    }
</style>