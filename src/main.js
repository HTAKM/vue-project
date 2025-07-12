import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import PrimeVue from 'primevue/config'
import Aura from "@primeuix/themes/aura"
// import { AnimateOnScroll } from 'primevue'

import Home from './view/Home.vue'
import About from './view/About.vue'
import Project from './view/Project.vue'
import Website from './view/Website.vue'

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