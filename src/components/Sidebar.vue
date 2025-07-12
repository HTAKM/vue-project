<script setup>
import { ref } from 'vue';
const props = defineProps({
    head: String,
    isDark: Boolean
})
const emits = defineEmits(['toggleDark'])
const expanded = ref(false)
const ToggleExpanded = () => {
    expanded.value = !expanded.value;
}
</script>
<template>
    <aside :class="`${expanded ? 'expanded' : ''}`">
        <div class="logo">
            <a href="#">{{ head }}</a>
        </div>
        <div class="menu-toggle-wrap">
            <button class="menu-toggle" @click="ToggleExpanded">
                <span class="material-symbols-outlined">keyboard_double_arrow_right</span>
            </button>
        </div>

        <h3>Menu</h3>
        <div class="menu">
            <router-link class="button" to="/">
                <span class="material-symbols-outlined">home</span>
                <span class="text">Home</span>
            </router-link>
            <router-link class="button" to="/about">
                <span class="material-symbols-outlined">info</span>
                <span class="text">About me</span>
            </router-link>
            <router-link class="button" to="/project">
                <span class="material-symbols-outlined">work</span>
                <span class="text">Projects</span>
            </router-link>
            <router-link class="button" to="/link">
                <span class="material-symbols-outlined">captive_portal</span>
                <span class="text">Links</span>
            </router-link>
        </div>
        
        <div class="flex"></div>

        <div class="menu">
            <button class="button" @click="emits('toggleDark', false)" v-if="isDark">
                <span class="material-symbols-outlined">brightness_3</span>
                <span class="text">Dark mode</span>
            </button>
            <button class="button" @click="emits('toggleDark', true)" v-else>
                <span class="material-symbols-outlined">brightness_5</span>
                <span class="text">Light mode</span>
            </button>
        </div>
    </aside>
</template>
<style lang="scss">
    aside {
        display: flex;
        flex-direction: column;
        width: var(--sidebar-width);
        min-height: 100%;
        height: 100%;
        overflow: hidden;
        padding: 1rem;
        transition: 0.2s ease-out;
        position: fixed;
        z-index: 99;
        background-color: var(--color-sidebar);
        -webkit-backface-visibility: hidden;

        @media (max-width: 576px) {
            padding: 0.5rem;
        }

        .logo a, 
        .menu-toggle-wrap .menu-toggle .material-symbols-outlined,
        .menu .button .material-symbols-outlined,
        .menu .button .text {
            color: var(--color-text);
        }
        .menu .button {
            &:hover, &.router-link-exact-active{
                background-color: var(--color-sidebar-hover);
            }
        }
        h3 {
            color: var(--color-heading);
        }

        &.dark {
            background-color: var(--color-sidebar-dark);
            .logo a, 
            .menu-toggle-wrap .menu-toggle .material-symbols-outlined,
            .menu .button .material-symbols-outlined,
            .menu .button .text {
                color: var(--color-text-dark);
            }
            .menu .button {
                &:hover, &.router-link-exact-active{
                    background-color: var(--color-sidebar-hover-dark);
                }
            }
            h3 {
                color: var(--color-heading-dark);
            }
        }

        &:not(.dark) {
            background-color: var(--color-sidebar-light);
            .logo a, 
            .menu-toggle-wrap .menu-toggle .material-symbols-outlined,
            .menu .button .material-symbols-outlined,
            .menu .button .text {
                color: var(--color-text-light);
            }
            .menu .button {
                &:hover, &.router-link-exact-active{
                    background-color: var(--color-sidebar-hover-light);
                }
            }
            h3 {
                color: var(--color-heading-light);
            }
        }
        .flex {
            flex: 1 1 0;
        }
        .logo {
            width: 2rem;
            margin: 0 auto;
            a {
                font-size: 1rem;
                font-weight: bolder;
                white-space: nowrap;
                display: flex;
                justify-content: center;
            }
            @media (max-width: 576px) {
                width: 1rem;
                a {
                    font-size: 0.5rem;
                }
            }
        }
        .menu-toggle-wrap {
            display: flex;
            justify-content: flex-end;
            margin-bottom: 1rem;
            position: relative;
            top: 0;
            transition: 0.2s ease-out;

            .menu-toggle {
                transition: 0.2s ease-out;
                padding: 0;
                
                .material-symbols-outlined {
                    font-size: 2rem;
                }
            }
            @media (max-width: 576px) {
                margin-bottom: 0.5rem;
                .menu-toggle .material-symbols-outlined {
                    font-size: 1rem;
                }
            }
        }
        h3, .button .text{
            opacity: 0;
            transition: 0.3s ease-out;
            white-space: nowrap;
        }
        .menu {
            margin: 0 -1rem;
            .button {
                display: flex;
                align-items: center;
                text-decoration: none;
                padding: 0.5rem 1rem;
                transition: 0.2s ease-out;
                .material-symbols-outlined {
                    font-size: 2rem;
                    transition: 0.2s ease-out;
                }
                .text {
                    transition: 0.2s ease-out;
                }
            }
            @media (max-width: 576px) {
                margin: 0 -0.5rem;
                .button {
                    padding: 0.5rem 0.5rem;
                    .material-symbols-outlined {
                        font-size: 1rem;
                    }
                }
            }
        }
        &.expanded {
            width: var(--sidebar-extended-width);
            .menu-toggle-wrap {
                top: -2rem;
                .material-symbols-outlined {
                    transition: 0.2s ease-out;
                    transform: rotate(180deg);
                }
            }
            h3, .button .text {
                opacity: 1;
            }
            .button .material-symbols-outlined {
                margin-right: 1rem;
            }
            @media (max-width: 576px) {
                .menu-toggle-wrap {
                    top: -1rem;
                }
                .button .material-symbols-outlined {
                    margin-right: 0.5rem;
                }
            }
        }
    }
</style>