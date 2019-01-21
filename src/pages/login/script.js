import { mapMutations, mapGetters } from 'vuex'
export default {
    data() {
        return {
            loginForm: {
                userName: '', // 用户名
                passWord: '', // 密码
                comCode: '' // 归属机构
            },
            loginFormRules: {
                userName: {
                    cName: '用户名',
                    visible: false
                },
                passWord: {
                    cName: '密码',
                    visible: false
                },
                comCode: {
                    cName: '归属机构',
                    visible: false
                }
            },
            rememberStatus: '',  // 勾选”记住我“选项
        }
    },
    route: {
        path: '/login',
        meta: {
            title: 'login'
        }
    },
    beforeMount() {

    },
    mounted() {
        this.getRememberMe()
    },
    computed: {
        ...mapGetters(['USERINFO'])
    },
    methods: {
        ...mapMutations(['SET_USERINFO']),
        requireLogin (key) {    // 验证是否填写相应字段并改变提示状态
            if (!this.loginForm[key]) {
                this.loginFormRules[key].visible = true
            } else {
                this.loginFormRules[key].visible = false
            }
        },
        checkForm () {  // 验证是否填写
            let _status = true
            Object.keys(this.loginForm).forEach(key => {
                this.requireLogin(key)
            })
            for (let p in this.loginFormRules) {
                if (this.loginFormRules[p].visible) {
                    _status = false
                }
            }
            return _status
        },
        setLocalRememberMe () { // 从本地存储/移除用户信息
            if (this.rememberStatus) {
                localStorage.setItem('userName', this.loginForm.userName)
                localStorage.setItem('passWord', this.loginForm.passWord)
                localStorage.setItem('rememberStatus', this.rememberStatus)
            } else {
                localStorage.removeItem('userName')
                localStorage.removeItem('passWord')
                localStorage.removeItem('rememberStatus')
            }
        },
        getRememberMe () {  // 获取localstrage中是否存储了用户信息
            // 首先设置'记住我'的状态
            this.rememberStatus = localStorage.getItem('rememberStatus') === 'true' ? true : false
            if (this.rememberStatus) {  // 如果是，设置存储的用户信息
                Object.keys(this.loginForm).forEach(key => {
                    this.loginForm[key] = localStorage.getItem(key)
                })
            }
        },
        submitLogin () {    // 登录
            this.$message('sign in')
            // 验证表单是否填写完整
            if (!this.checkForm()) return
            // 设置'记住密码'功能
            this.setLocalRememberMe()
            // 存储用户信息
            this.SET_USERINFO(this.loginForm)
            // 跳转页面
            this.$router.push({name: 'main'}) 
        }
    }
}
