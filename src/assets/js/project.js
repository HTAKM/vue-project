import Segment from '@/components/Segment.vue';
import notesData from 'https://htakm.github.io/latex-notes/js/notesData.js';
import latexClasses from 'https://htakm.github.io/latex-notes/js/latexTemplateClass.js';
import otherProjects from '@/assets/js/other_projects.js';

export default {
  name: 'Project',
  components: {
    Segment
  },
  props: {
    isDark: Boolean
  },
  data() {
    return {
      notesData,
      latexClasses,
      otherProjects
    };
  }
};