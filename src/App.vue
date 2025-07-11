<script setup>
import { RouterView } from 'vue-router';
import Sidebar from './components/Sidebar.vue';
</script>
<template>
    <Sidebar head="HU" />
    <div class="main">
        <RouterView />
    </div>
</template>
<style lang="scss" scoped>
main {
    flex: 1 1 0;
    padding: 2rem;
    align-items: center;
    max-width: 1000px;
    margin: 0 auto;
    // @media (max-width: 768px) {
    //     padding-left: 6rem;
    // }
}

.main {
    padding: calc(var(--navbar-height) + 2rem) 4rem 2rem calc(var(--sidebar-width) + 4rem);
    font-weight: normal;
    display: flex;
}
// @media (min-width: 1024px) {
//   .main {
//     grid-template-columns: 1fr 1fr;
//   }
// }

</style>