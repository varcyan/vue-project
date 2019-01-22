import { mapMutations } from 'vuex'
import { getParentById } from './../../utils/tools'

export default {
    props: {},
    data() {
        return {
            status: true,
            menuList: [
                {
                    pid: 0,
                    value: '车险业务预算管理',
                    status: false,
                    level: 'level_1',
                    id: 1,
                    children: [
                        {
                            pid: 1,
                            id: 2,
                            value: '录入',
                            status: false,
                            level: 'level_2',
                            children: [
                                {
                                    pid: 2,
                                    id: 3,
                                    level: 'level_3',
                                    value: '录入-1',
                                    status: false
                                }
                            ]
                        },
                        {
                            pid: 1,
                            id: 4,
                            level: 'level_2',
                            value: '查询',
                            status: false
                        },
                        {
                            pid: 1,
                            id: 5,
                            level: 'level_2',
                            value: '审批',
                            status: false
                        },
                        {
                            pid: 1,
                            id: 6,
                            level: 'level_2',
                            value: '分解',
                            status: false
                        }
                    ]
                },
                {
                    pid: 0,
                    id: 7,
                    level: 'level_1',
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
        ...mapMutations(['SET_MENULIST', 'SET_BREADLIST']),
        clickMenu(item) {
            // console.log(getParentById(this.menuList, item.id))
            item.status = !item.status
            this.SET_BREADLIST(getParentById(this.menuList, item.id))
        },
        handleOpen(key, keyPath) {
            console.log(key, keyPath)
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath)
        }
    }
}
