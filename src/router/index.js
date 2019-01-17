import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

// 引入组件
const Login = r =>
    require.ensure([], () => r(require('@/pages/login/index')), 'login')
const Main = r =>
    require.ensure([], () => r(require('@/pages/main/index')), 'main')
const NotFound = r =>
    require.ensure([], () => r(require('@/pages/404/index')), 'notFound')

// 配置路由并导出
export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/login',
            meta: {
                requiresAuth: false // 是否需要验证
            }
        },
        {
            path: '*',
            redirect: '/404',
            meta: {
                requiresAuth: false
            }
        },
        {
            path: '/login', // 路由名称
            name: 'login', // 命名路由
            component: Login, // vue组件,
            meta: {
                requiresAuth: false
            }
        },
        {
            name: 'main',
            path: '/main',
            component: Main,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/404',
            component: NotFound
        }
    ]
})
