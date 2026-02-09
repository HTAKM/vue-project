import Segment from '@/components/Segment.vue';
import gradeFile from '@/assets/course-and-grade.csv';
import { defineAsyncComponent, ref } from 'vue';

export default {
  name: 'About',
  components: {
    Segment,
  },
  props: {
    isDark: Boolean
  },
  data() {
    return {
      isShowing: 'Contact',
      GPAValidGrade: ['A+', 'A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D', 'F'],
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