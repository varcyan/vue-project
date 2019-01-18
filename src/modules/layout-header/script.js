import { mapGetters } from 'vuex'

export default {
    props: {},
    data() {
        return {
            test: ''
        }
    },
    created() {},
    mounted() {
    },
    computed: {
        ...mapGetters(['MENULIST'])
    },
    methods: {
        
    }
}
