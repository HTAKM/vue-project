import './assets/css/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import PrimeVue from 'primevue/config'
import Aura from "@primeuix/themes/aura"

import Home from './views/Home.vue'
import About from './views/About.vue'
import Project from './views/Project.vue'
import Website from './views/Website.vue'

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
            component: About
        },
        {
            path: '/project',
            name: 'Project',
            component: Project
        },
        {
            path: '/link',
            name: 'Related Websites',
            component: Website
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