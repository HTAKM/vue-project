<script setup>
import { Menubar } from 'primevue'
import { ref } from 'vue'
const props = defineProps({
    title: String
})
</script>
<template>
    <header>
        <div class="flex"></div>
        <div id="current-page">{{ props.title }}</div>
    </header>
</template>
<style scoped lang="scss">
header {
    display: flex;
    width: 100vw;
    height: var(--navbar-height);
    // overflow: hidden;
    padding: 1rem;
    background-color: var(--vt-c-light-purple-mute-tab);
    color: var(--vt-c-light-purple);
    transition: 0.2s ease-out;
    // position: fixed;
    // z-index: 99;

    @media (prefers-color-scheme: dark) {
        background-color: var(--vt-c-dark-purple-mute-tab);
        color: var(--vt-c-dark-purple);
    }
    .flex {
        flex: 1 1 0;
    }
    #header-item {
        display: flex;
        .flex {
            flex: 1 1 0;
        }
        &.expanded {
            .menu-toggle {
                transform: rotate(-180deg);
            }
        }
    }
}
</style>