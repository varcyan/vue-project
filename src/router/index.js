import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

// 引入组件
const Login = r =>
    require.ensure([], () => r(require('@/pages/login/index')), 'login')
const List = r =>
    require.ensure([], () => r(require('@/pages/list/index')), 'list')
const NotFound = r =>
    require.ensure([], () => r(require('@/pages/404/index')), 'notFound')

// 配置路由并导出
export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '*',
            redirect: '/404'
        },
        {
            path: '/login', // 路由名称
            name: 'login', // 命名路由
            component: Login // vue组件
        },
        {
            path: '/list',
            component: List
        },
        {
            path: '/404',
            component: NotFound
        }
    ]
})
