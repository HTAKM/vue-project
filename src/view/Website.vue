<script setup>
import Session from '@/components/Session.vue';
import lectureMaterialLinks from '@/assets/courseItemLinks';
const props = defineProps({
    isDark: Boolean
});
</script>
<template>
    <main class="website-page">
        <Session title="Links to some BGM that I listen to:" :isDark="isDark">
            <table class="table">
                <tbody>
                    <tr>
                        <th>Emil Chronicle Online</th>
                        <td><a href="https://www.youtube.com/playlist?list=PLDooSxhH10QvG9iVwQoTt5IiGi1_wpn9p">BGM</a> (Not complete list)</td>
                    </tr>
                </tbody>
            </table>
        </Session>
        <Session title="Links of lecture materials" :isDark="isDark">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th v-for="head in ['Course Code', 'Link', 'Notes', 'LaTeX']">{{ head }}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="row in lectureMaterialLinks">
                        <th>{{ row.courseCode }}</th>
                        <td><a :href="row.link ? row.link : ''">{{row.link ? "Google Drive" : ''}}</a></td>
                        <td><a :href="row.pdf ? row.pdf : ''">{{row.pdf ? "pdf" : ''}}</a></td>
                        <td><a :href="row.tex ? row.tex : ''">{{row.tex ? "LaTeX" : ''}}</a></td>
                    </tr>
                </tbody>
            </table>
        </Session>
    </main>
</template>