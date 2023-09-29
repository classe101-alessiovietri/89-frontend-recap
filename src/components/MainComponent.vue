<script>
export default {
    name: "MainComponent",
}
</script>

<template>
    <main>
        <router-view></router-view>
    </main>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables.scss" as *;

main {
    padding: $main-padding;
}
</style>