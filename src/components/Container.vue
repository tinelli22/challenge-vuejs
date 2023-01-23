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
        width: 1366px;
        margin: 0 auto;
    }
</style>