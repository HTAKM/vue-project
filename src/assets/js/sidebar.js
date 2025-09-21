export default {
    props: {
        head: String,
        isDark: Boolean
    },
    emits: ['toggleDark'],
    data() {
        return {
            expanded: false
        };
    },
    methods: {
        toggleExpanded() {
            this.expanded = !this.expanded;
        }
    }
};