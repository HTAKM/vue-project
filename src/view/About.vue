<script setup>
import { ref } from 'vue';
import Session from '@/components/Session.vue';
import gradeFile from '@/assets/course-and-grade.csv'
const props = defineProps({
    isDark: Boolean
});
const isShowing = ref('Contact');
const changeShowing = (tab) => {
    isShowing.value = tab;
}
const GPAValidGrade = ['A+','A','A-','B+','B','B-','C+','C','C-','D','F'];
const showGrades = gradeFile.filter((row) => GPAValidGrade.includes(row.Grade))
</script>
<template>
    <main class="about-page">
        <Session :isDark="isDark">
            <div class="button-inline">
                <button @click="changeShowing('Contact')">Contact</button>
                <button @click="changeShowing('Academic')">Academic</button>
                <button @click="changeShowing('Experience')">Experience</button>
                <button @click="changeShowing('Games')">Games</button>
            </div>
        </Session>
        <Session title="Contact" v-show="isShowing == 'Contact'" :isDark="isDark">
            <p>Email: <a href="mailto:'yhkwokae@connect.ust.hk'">yhkwokae@connect.ust.hk</a></p>
        </Session>
        <Session title="Info" v-show="isShowing == 'Academic'" :isDark="isDark">
            <p>Current University: The Hong Kong University of Science and Technology</p>
            <p>Year of Study: Year 3</p>
            <p>Current Major: (COSC + AI) + DSCT</p>
            <p>Target: Graduate in First Class Honors</p>
        </Session>
        <Session title="Grade" v-show="isShowing == 'Academic'" :isDark="isDark">
            <p>The following is my grade.</p>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th v-for="header in ['Term', 'Course Code', 'Course Name', 'Credits', 'Grade']" :key="header">{{ header }}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="row in showGrades">
                        <td>Year {{ row.Year }} {{ row.Term }}</td>
                        <td>{{ row.Prefix }} {{ row.Code }}</td>
                        <td>{{ row.Name }}</td>
                        <td>{{ row.Credit }}</td>
                        <td>{{ row.Grade }}</td>
                    </tr>
                </tbody>
            </table>
        </Session>
        <Session title="Experience" v-show="isShowing == 'Experience'" :isDark="isDark">
            <h2>Department of Computer Science and Engineering, HKUST</h2>
            <h3>Undergraduate Teaching Assistent (COMP 1023)</h3>
            <h5>Time: July-August 2024</h5>
            <p>
                Upon failed applications for summer TAs in other existing courses,
                due to my excellent results in COMP 2211 (Exploring Artificial Intelligence), 
                Dr. Desmond Tsoi invited me to participate in the early development of his new course, 
                COMP 1023 (Introduction to Python Programming), as a UGTA to help with developing lab assignments from stretch.
            </p>
            <br/>
            <h2>Department of Computer Science and Engineering, HKUST</h2>
            <h3>Undergraduate Teaching Assistent (COMP 1023)</h3>
            <h5>Time: February-June 2025</h5>
            <p>
                This time, I was successfully applied to become an UGTA in COMP 1023 again due to outstanding academic results last semester.
                I helped polish the assignments developed by previous UGTAs, 
                including adding necessary testing components and improve visualizations. 
            </p>
            <br/>
            <h2>AI Future Education Limited</h2>
            <h3>Programmer / Researcher Internship</h3>
            <h5>Time: July-August 2025</h5>
            <p>

            </p>
        </Session>
        <Session title="Games I am playing" v-show="isShowing == 'Games'" :isDark="isDark">
            <p>Below are games that I am playing currently (likely paused for now but I would come back)</p>
            <ul>
                <li>Infinite Galaxy (DO NOT PLAY!!! This is a p2w game and I am a masochist playing as a f2p.)</li>
                <li><a href="https://store.steampowered.com/app/1399720/Antimatter_Dimensions/" target="_blank">Antimatter Dimension</a></li>
                <li><a href="https://keyemilco.wixsite.com/econline" target="_blank">EcoKey2</a></li>
                <li><a href="https://store.steampowered.com/app/1546320/Your_Chronicle/" target="_blank">Your Chronicle</a></li>
                <li><a href="https://store.steampowered.com/app/280220/Creeper_World_3_Arc_Eternal/" target="_blank">Creeper World 3: Arc Eternal</a></li>
            </ul>
        </Session>
        <Session title="Games I have played" v-show="isShowing == 'Games'" :isDark="isDark">
            <p>Below are games that I have played and like.</p>
            <ul>
                <li><a href="https://eco.nekogame.com/" target="_blank">Nekogame Emil Chronicle Online</a></li>
                <li>ECO-Re (Server closed)</li>
                <li>Lemon Team ECO (Server closed)</li>
                <li><a href="https://synergism.cc/" target="_blank">Synergism</a></li>
                <li><a href="https://www.talesrunner.com.hk/" target="_blank">跑 Online</a></li>
                <li><a href="https://pixelplace.io/" target="_blank">pixelplace.io</a></li>
                <li><a href="https://www.chiark.greenend.org.uk/~sgtatham/puzzles/" target="_blank">Portable Puzzle Collection</a></li>
                <li>Geometry Dash</li>
            </ul>
        </Session>
    </main>
</template>
<style scoped style="scss">
</style>