<script setup>
// import Navbar from '@/components/Navbar.vue';
import Session from '@/components/Session.vue';
</script>
<template>
    <!-- <Navbar title="Home" /> -->
    <main class="home-page">
        <Session title="Welcome!">
            <p>I am HU. You can also call me Henry or HTAKM.</p>
            <p>I am an undegraduate student of the Hong Kong University of Science and Technology.</p>
        </Session>
        <Session title="My Website">
            <p>In this website, you can find some information about me, as well as the notes I made and some related links. 
                You can click on the following links to find what you want.</p>
            <ul>
                <li><router-link to="/project#notes">My Notes</router-link></li>
            </ul>
        </Session>
    </main>
</template>