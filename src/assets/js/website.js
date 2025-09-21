import Segment from '@/components/Segment.vue';
import lectureMaterialLinks from '@/assets/courseItemLinks';

export default {
  name: 'Website',
  components: {
    Segment
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