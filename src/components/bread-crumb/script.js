import { mapGetters } from 'vuex'
export default {
    props: {},
    data() {
        return {
            // list: ''
            list: this.$store.state.BREADLIST
        }
    },
    methods: {},
    computed: {
        ...mapGetters(['BREADLIST'])
    },
    watch: {
        BREADLIST: {
            handler: function() {
            },
            deep: true //对象内部的属性监听，也叫深度监听
        },
        list: {
            handler: function(val, oldval) {
                console.log(val.name, oldval)
            },
            deep: true //对象内部的属性监听，也叫深度监听
        }
    },
    mounted() {

    }
}
