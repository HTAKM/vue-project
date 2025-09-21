import Sidebar from '@/components/Sidebar.vue';

export default {
    components: {
        Sidebar
    },
    data() {
        return {
            isDarkMode: false
        };
    },
    created() {
        this.$watch(
            () => this.isDarkMode,
            (newValue) => {
                if (newValue) {
                    document.body.classList.add('dark');
                } else {
                    document.body.classList.remove('dark');
                }
            }
        );
    },
    methods: {
        checkDarkMode(event) {
            this.isDarkMode = event ? event.matches : window.matchMedia('(prefers-color-scheme: dark)').matches;
        },
        toggleDark() {
            this.isDarkMode = !this.isDarkMode;
        }
    },
    mounted() {
        this.checkDarkMode();
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', this.checkDarkMode);
        document.body.classList.add('loaded');
    },
    beforeUnmount() {
        window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', this.checkDarkMode);
    }
};