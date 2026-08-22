import './assets/css/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import Home from './views/Home.vue'
import About from './views/About.vue'
import Experience from './views/Experience.vue'
import Project from './views/Project.vue'
import Color from './views/Color.vue'

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
            path: '/experience',
            name: 'Experience',
            component: Experience
        },
        {
            path: '/project',
            name: 'Project',
            component: Project
        },
        {
            path: '/project/color',
            name: 'Color',
            component: Color
        }
    ]
})
app.use(router);
app.mount('body');