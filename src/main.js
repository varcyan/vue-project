// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import store from './store'
import pages from './pages'

Vue.config.productionTip = false
Vue.use(Router)

// 引入页面
const routes = [
    {
        path: '/',
        redirect: '/login',
    },
    ...eachRoutes(pages),
    {
        path: '*',
        redirect: '/404',
    }
]
const router = new Router({
    routes
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title || ''
    next()
})

function eachRoutes(_routeList) {
    let _routes = []
    for (let key in _routeList) {
        let _one = _routeList[key]
        if (_one.route) {
            _routes.push({
                ..._one.route,
                component: _one
            })
        } else {
            Object.keys(_one).map(_key => {
                _routes.push({
                    ..._one[_key].route,
                    component: _one[_key]
                })
            })
        }
    }
    return _routes
}

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})
