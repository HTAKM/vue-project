<script setup>
import { RouterView } from 'vue-router';
import Sidebar from './components/Sidebar.vue';
import { ref, onMounted, onUnmounted, watch } from 'vue';
const isDarkMode = ref(false);
const checkDarkMode = (event) => {
    isDarkMode.value = event ? event.matches : window.matchMedia('(prefers-color-scheme: dark)').matches;
};
onMounted(() => {
    checkDarkMode();
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', checkDarkMode);
});
onUnmounted(() => {
    window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', checkDarkMode);
})
const toggleDark = () => {
    isDarkMode.value = !isDarkMode.value;
};
watch(isDarkMode, (newValue) => {
    if (newValue) {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
})
</script>
<template>
    <div id="app">
        <Sidebar head="HU" :class="{dark : isDarkMode}" :isDark="isDarkMode" @toggleDark="toggleDark" />
        <div class="main">
            <RouterView :isDark="isDarkMode" />
        </div>
    </div>
</template>
<style lang="scss">
#app {
    margin: 0;
    padding: 0;
    font-weight: normal;
    box-sizing: border-box;
    height: 100%;
}

main {
    flex: 1 1 0;
    padding: 2rem;
    align-items: center;
    max-width: 1000px;
    margin: 0 auto;
    transition: 0.2s ease-out;

    // @media (max-width: 768px) {
    //     padding: 1.5rem;
    // }
    // @media (max-width: 576px) {
    //     padding: 1rem;
    // }
}

.main {
    padding: calc(var(--navbar-height) + 2rem) 4rem 2rem calc(var(--sidebar-width) + 4rem);
    font-weight: normal;
    display: flex;
    transition: 0.2s ease-out;
    // @media (max-width: 768px) {
    //     padding: calc(var(--navbar-height) + 1.5rem) 3rem 1.5rem calc(var(--sidebar-width) + 3rem);
    // }
    // @media (max-width: 576px) {
    //     padding: calc(var(--navbar-height) + 1rem) 2rem 1rem calc(var(--sidebar-width) + 2rem);
    // }
}
</style>