<script>
import Session from '@/components/Session.vue';
import notesData from '@/assets/notesData.js';
import latexClasses from '@/assets/latexTemplateClass.js';

export default {
  name: 'Project',
  components: {
    Session
  },
  props: {
    isDark: Boolean
  },
  data() {
    return {
      notesData,
      latexClasses
    };
  }
};
</script>
<template src="../assets/html/Project.html" />
<style scoped style="scss">
</style>