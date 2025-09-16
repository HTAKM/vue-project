<script>
import { ref } from 'vue';
import Session from '@/components/Session.vue';
import gradeFile from '@/assets/course-and-grade.csv';

export default {
  name: 'About',
  components: {
    Session
  },
  props: {
    isDark: Boolean
  },
  data() {
    return {
      isShowing: 'Contact',
      GPAValidGrade: ['A+', 'A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D', 'F']
    };
  },
  computed: {
    showGrades() {
      return gradeFile.filter((row) => row.Grade && this.GPAValidGrade.includes(row.Grade));
    }
  },
  methods: {
    changeShowing(tab) {
      this.isShowing = tab;
    }
  }
};
</script>
<template src="../assets/html/about.html" />
<style scoped style="scss">
</style>