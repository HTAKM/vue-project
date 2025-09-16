<script>
import Session from '@/components/Session.vue';
import lectureMaterialLinks from '@/assets/courseItemLinks';

export default {
  name: 'Website',
  components: {
    Session
  },
  props: {
    isDark: Boolean
  },
  data() {
    return {
      lectureMaterialLinks
    };
  }
};
</script>
<template src="../assets/html/Website.html" />
<style scoped lang="scss">
</style>