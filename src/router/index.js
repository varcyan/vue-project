import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

// 引入组件
const Login = r => require.ensure([], () => r(require('@/pages/login/index')), 'login')
const List = r => require.ensure([], () => r(require('@/pages/list/index')), 'list')

// 配置路由并导出
export default new Router({
    routes: [
        {
            path: '/login', // 路由名称
            name: 'login',  // 命名路由
            component: Login    // vue组件
		},
		{
            path: '/list',
            component: List
        }
    ]
})
