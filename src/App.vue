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
    padding: 28px;
    align-items: center;
    max-width: 1000px;
    margin: 0 auto;
    transition: 0.2s ease-out;

    @media (max-width: 768px) {
        padding: 21px;
    }
    @media (max-width: 576px) {
        padding: 14px;
    }
}

.main {
    padding: calc(var(--navbar-height) + 28px) 56px 28px calc(var(--sidebar-width) + 56px);
    font-weight: normal;
    display: flex;
    transition: 0.2s ease-out;
    @media (max-width: 768px) {
        padding: calc(var(--navbar-height) + 21px) 42px 21px calc(var(--sidebar-width) + 42px);
    }
    @media (max-width: 576px) {
        padding: calc(var(--navbar-height) + 14px) 28px 14px calc(var(--sidebar-width) + 28px);
    }
}
</style>