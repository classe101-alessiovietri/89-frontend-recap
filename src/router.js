import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/HomePage.vue';
import SongsShowPage from './pages/SongsShowPage.vue';
import ContactPage from './pages/ContactPage.vue';
import NotFoundPage from './pages/NotFoundPage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/songs/:slug',
            name: 'songs-show',
            component: SongsShowPage
        },
        {
            path: '/contact',
            name: 'contact',
            component: ContactPage
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: NotFoundPage
        }
    ]
});

export { router };