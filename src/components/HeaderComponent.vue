<script>
export default {
    name: "HeaderComponent",
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>

<template>
    <header>
        <ul>
            <li>
                <router-link :to="{ name: 'home' }">
                    Home
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'contact' }">
                    Contact
                </router-link>
            </li>
        </ul>
    </header>
</template>

<style lang="scss" scoped>
header {
    padding: 40px;
    text-align: center;
}
</style>