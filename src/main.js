import './assets/css/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import PrimeVue from 'primevue/config'
import Aura from "@primeuix/themes/aura"

import Home from './views/Home.vue'

const app = createApp(App);
const router = createRouter({
    history: createWebHashHistory(),
    mode: 'hash',
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Home
        },
        {
            path: '/about',
            name: 'About',
            component: () => import('./views/About.vue')
        },
        {
            path: '/project',
            name: 'Project',
            component: () => import('./views/Project.vue')
        },
        {
            path: '/link',
            name: 'Related Websites',
            component: () => import('./views/Website.vue')
        }
    ]
})
app.use(router);
app.use(PrimeVue, {
    theme: {
        preset: Aura,
    }
});
app.mount('body');