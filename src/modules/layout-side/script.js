import {mapMutations} from 'vuex'

export default {
    props: {},
    data() {
        return {
            status: true,
            menuList: [
                {
                    value: '车险业务预算管理',
                    status: false,
                    children: [
                        {
                            value: '录入',
                            status: false,
                            children: [
                                {
                                    value: '录入-1',
                                    status: false
                                }
                            ]
                        },
                        {
                            value: '查询',
                            status: false
                        },
                        {
                            value: '审批',
                            status: false
                        },
                        {
                            value: '分解',
                            status: false
                        }
                    ]
                },
                {
                    value: '生命表编制与审批',
                    status: false
                }
            ]
        }
    },
    mounted() {
        this.SET_MENULIST(this.menuList)
    },
    computed: {},
    methods: {
        ...mapMutations(['SET_MENULIST']),
        handleOpen(key, keyPath) {
            console.log(key, keyPath)
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath)
        }
    }
}
