import { mapGetters, mapMutations } from 'vuex'
import { getParentById } from './../../utils/tools'

export default {
    props: {},
    data() {
        return {
            status: true,
            menuList: [
                {
                    title: '古风',
                    id: 101,
                    pid: 0,
                    child: [],
                    level: 'level_1'
                },
                
                {
                    title: '我的游戏',
                    id: 1,
                    pid: 0,
                    checked: false,
                    level: 'level_1',
                    child: [
                        {
                            title: '守望先锋',
                            id: 2,
                            pid: 1,
                            checked: false,
                            level: 'level_2',
                            child: [
                                {
                                    title: 'D.VA',
                                    id: 3,
                                    pid: 2,
                                    checked: false,
                                    child: []
                                },
                                {
                                    title: '安娜',
                                    id: 4,
                                    pid: 2,
                                    checked: false,
                                    child: []
                                }
                            ]
                        },
                        {
                            title: '英雄杀',
                            id: 5,
                            pid: 1,
                            checked: false,
                            level: 'level_2',
                            child: [
                                {
                                    title: '韩信',
                                    id: 6,
                                    pid: 5,
                                    checked: false,
                                    child: []
                                },
                                {
                                    title: '貂蝉',
                                    id: 7,
                                    pid: 5,
                                    checked: false,
                                    child: []
                                }
                            ]
                        }
                    ]
                },
                {
                    title: 'BUFF',
                    id: 100,
                    pid: 0,
                    level: 'level_1',
                    child: []
                },
                {
                    title: '我的音乐',
                    id: 8,
                    pid: 0,
                    checked: false,
                    level: 'level_1',
                    child: [
                        {
                            title: '古风',
                            id: 9,
                            pid: 8,
                            checked: false,
                            level: 'level_2',
                            child: []
                        },
                        {
                            title: '漫',
                            id: 10,
                            pid: 8,
                            checked: false,
                            level: 'level_2',
                            child: []
                        },
                        {
                            title: '轻音',
                            id: 11,
                            pid: 8,
                            checked: false,
                            level: 'level_2',
                            child: []
                        },
                        {
                            title: 'BUFF',
                            id: 12,
                            pid: 8,
                            checked: false,
                            level: 'level_2',
                            child: []
                        }
                    ]
                }
            ]
        }
    },
    mounted() {
        this.SET_MENULIST(this.menuList)
    },
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
    methods: {
        ...mapMutations(['SET_MENULIST', 'SET_BREADLIST']),
        clickMenu(item) {
            // 菜单折叠切换
            item.checked = item.child && item.child.length ? !item.checked : true
            // 获取当前菜单及父级菜单
            let _parent = getParentById(this.menuList, item.id)
            // 设置面包屑数据
            this.SET_BREADLIST(_parent)
        },
        resetStatus (data) {
            let _this = this
            data.forEach(item => {
                item.checked = false
                if (item.children) {
                    _this.resetStatus(item.child)
                }
            })
        },
        handleOpen(key, keyPath) {
            console.log(key, keyPath)
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath)
        }
    }
}
