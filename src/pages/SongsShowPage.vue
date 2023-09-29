<script>
import axios from 'axios';

export default {
    name: "SongsShowPage",
    data() {
        return {
            song: null,
            loading: false
        }
    },
    created() {
        this.getSong();
    },
    methods: {
        getSong() {
            this.loading = true;

            axios
                .get('http://localhost:8000/api/songs/' + this.$route.params.slug)
                .then(response => {
                    console.log(response.data);

                    this.song = response.data.song;
                })
                .catch(err => {
                    this.song = null;

                    // alert('Impossibile recuperare la canzone');
                })
                .finally(() => {
                    this.loading = false;
                });
        }
    }
}
</script>

<template>
    <template v-if="!loading && song">
        <h1>
            {{ song.title }}
        </h1>
        <h4>
            Durata: {{ (song.duration / 60).toFixed(1) }} min.
        </h4>
        <img v-if="song.full_cover_img" :src="song.full_cover_img" :alt="song.title">
    </template>
    <template v-if="!loading && !song">
        <h3>
            404 - Canzone non trovata
        </h3>
    </template>
</template>

<style lang="scss" scoped>
img {
    max-width: 300px;
}
</style>