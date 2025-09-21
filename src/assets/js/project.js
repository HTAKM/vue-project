import Segment from '@/components/Segment.vue';
import notesData from '@/assets/notesData.js';
import latexClasses from '@/assets/latexTemplateClass.js';

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
      latexClasses
    };
  }
};