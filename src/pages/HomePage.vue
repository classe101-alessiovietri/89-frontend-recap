<script>
import axios from 'axios';

export default {
    name: "HomePage",
    data() {
        return {
            songs: [],
            currentPage: 1,
            lastPage: 1,
            loading: false
        }
    },
    created() {
        this.getSongs();
    },
    methods: {
        getSongs() {
            this.loading = true;

            axios
                .get('http://localhost:8000/api/songs', {
                    params: {
                        page: this.currentPage
                    }
                })
                .then(response => {
                    console.log(response.data);

                    this.songs = response.data.songs.data;
                    this.currentPage = response.data.songs.current_page;
                    this.lastPage = response.data.songs.last_page;

                    this.loading = false;
                })
                .catch(err => {
                    alert('Impossibile recuperare le canzoni');
                });
        },
        changePage(mode) {
            if (!this.loading) {
                if (mode == '-') {
                    if (this.currentPage > 1) {
                        this.currentPage--;
                        this.getSongs();
                    }
                }
                else if (mode == '+') {
                    if (this.lastPage > this.currentPage) {
                        this.currentPage++;
                        this.getSongs();
                    }
                }
            }
        }
    }
}
</script>

<template>
    <h1>
        Songs
    </h1>
    <ul v-if="songs.length > 0">
        <li v-for="song in songs" :key="song.id">
            <div>
                <h2>
                    {{ song.title }}
                </h2>
                <h4>
                    Durata: {{ (song.duration / 60).toFixed(1) }} min.
                </h4>
                <img v-if="song.full_cover_img" :src="song.full_cover_img" :alt="song.title">
            </div>
            <div>
                <router-link :to="{ name: 'songs-show', params: { slug: song.slug } }">
                    Check song
                </router-link>
            </div>
        </li>
    </ul>
    <div>
        <button
            @click="changePage('-')"
            :disabled="currentPage == 1 || loading">
            Precedenti
        </button>
        <button
            @click="changePage('+')"
            :disabled="currentPage == lastPage || loading">
            Successive
        </button>
    </div>
</template>

<style lang="scss" scoped>
img {
    max-width: 100px;
}
</style>