import {
    mapMutations,
    mapGetters,
} from 'vuex'
export default {
    data() {
        return {
            list: []
        }
    },
    route: {
        path: '/list',
        meta: {
            title: 'list'
        }
    },
    beforeMount () {
        console.log('list:beforeMount ...')
    },
    created () {
        console.log(this.userInfo)
    },
    computed: {
        ...mapGetters(['userInfo'])
    },
    methods: {
        ...mapMutations(['setUserInfo']),
    }
}
