// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import store from './store'
import { Button, Select } from 'element-ui' // 按需引入，需在下方使用Vue.use
import 'element-ui/lib/theme-chalk/index.css'
import App from './app'

Vue.prototype.$ELEMENT = { size: 'small' }  // 设置默认尺寸
Vue.use(Button)
Vue.use(Select)

Vue.config.productionTip = false
let _body = document.getElementsByTagName('body')[0]

router.beforeEach((to, from, next) => {
    document.title = to.meta.title || ''
    if (to.name === 'login' && !_body.className) {
		console.log('​to', to)
        _body.className = 'bg-login'
    } else if (_body.className) {
        _body.className = ''
    }
    console.log(_body)
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
