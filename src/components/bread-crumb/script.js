import { mapGetters } from 'vuex'
export default {
    props: {},
    data() {
        return {

        }
    },
    methods: {},
    computed: {
        ...mapGetters(['BREADLIST'])
    },
    watch: {
        BREADLIST: {    // 监听列表发生变化
            handler: function() {
            },
            deep: true //对象内部的属性监听，也叫深度监听
        }
    },
    mounted() {

    }
}
