import { mapGetters } from 'vuex'
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
    beforeMount() {

    },
    created() {
        
    },
    computed: {
        ...mapGetters(['USERINFO'])
    },
    methods: {
        open() {
            this.$message('这是一条消息提示')
        },

        openVn() {
            const h = this.$createElement
            this.$message({
                message: h('p', null, [
                    h('span', null, '内容可以是 '),
                    h('i', { style: 'color: teal' }, 'VNode')
                ])
            })
        },
        open1() {
            this.$alert('这是一段内容', '标题名称', {
              confirmButtonText: '确定',
              callback: action => {
                this.$message({
                  type: 'info',
                  message: `action: ${ action }`
                })
              }
            })
          }
    }
}
