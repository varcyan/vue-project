// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import store from './store'
import {
    Button,
    Select,
    Alert,
    MessageBox,
    Loading,
    Notification,
    Message,
    Input,
    Container,
    Header,
    Aside,
    Main,
    Footer,
    Form,
    FormItem,
    Tooltip,
    Popover,
    Checkbox,
    CheckboxButton,
    CheckboxGroup,
    Row,
    Col
} from 'element-ui' // 按需引入，需在下方使用Vue.use
// import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/element-variables.scss'
import App from './app'

Vue.prototype.$ELEMENT = { size: 'medium' } // 设置默认尺寸
Vue.use(Button) // 按钮
Vue.use(Select) // 选择框
Vue.use(Alert) // 弹框
Vue.use(Input) // 输入框
Vue.use(Container) // 容器
Vue.use(Header) // 头部
Vue.use(Aside) // 边栏
Vue.use(Main) // 内容区
Vue.use(Footer) // 底部
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Loading.directive)
Vue.use(Tooltip) // 文字提示
Vue.use(Popover)
Vue.use(Checkbox)
Vue.use(CheckboxButton)
Vue.use(CheckboxGroup)
Vue.use(Row)
Vue.use(Col)

Vue.prototype.$loading = Loading.service
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$notify = Notification
Vue.prototype.$message = Message

Vue.config.productionTip = false

let isLogin = window.sessionStorage.userInfo

router.beforeEach((to, from, next) => {
    document.title = to.meta.title || ''
    console.log(window.sessionStorage.userInfo)
    // 将要跳转的路由是否需要有需要验证的页面
    if (to.matched.some(record => record.meta.requiresAuth)) {        
        if (!isLogin) {
            Vue.prototype.$message('未登录')
            next({
                path: '/login',
                query: { redirect: to.fullPath }
            })
        }
    } else {
        // 不需要验证 如login页面
        next()
    }
    next()
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})
