<script setup>
import Session from '@/components/Session.vue';
import notesData from '@/assets/notesData.js';
import latexClasses from '@/assets/latexTemplateClass.js';
const props = defineProps({
    isDark: Boolean
});
</script>
<template>
    <main class="project-page">
        <Session title="Notes" id="notes" :isDark="isDark">
            <p>Here are some of the notes I have made. (In start date chronological order)</p>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th v-for="head in ['Title', 'LaTeX Class used', 'pdf file', 'tex file', 'Other files']">{{ head }}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="note in notesData">
                        <th>{{ note.title }}</th>
                        <td>{{ note.class }}</td>
                        <td><a :href="note.pdfLink" target="_blank">pdf</a></td>
                        <td><a :href="note.texLink" target="_blank">LaTeX</a></td>
                        <td><a :href="note.others ? note.others.link : ''" target="_blank">{{ note.others ? note.others.name : '' }}</a></td>
                    </tr>
                </tbody>
            </table>
        </Session>
        <Session title="LaTeX Class" :isDark="isDark">
            <p>I have made some customized LaTeX class to make my notes. You can find them below:</p>
            <ul>
                <li v-for="latexClass in latexClasses">
                    <a :href="latexClass.link">{{ latexClass.name }}</a>
                </li>
            </ul>
        </Session>
    </main>
</template>