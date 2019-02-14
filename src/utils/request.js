import 'whatwg-fetch'
// import md5 from 'md5'
import querystring from 'querystring'
// import { mapMutations } from 'vuex'

function getData() {
    return function(_url, _data) {
        let thisVue = this
        return new Promise(function(resolve, reject) {
            let requestUrl = _url
            let dataString = JSON.stringify(_data || {})
            let postData = {
                data: dataString
            }

            fetch(requestUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    sessionId: window.sessionStorage.sessionId || ''
                },
                body: querystring.stringify(postData)
            })
                .then(function(_res) {
                    return _res.json()
                })
                .then(function(_data) {
                    switch (_data.status) {
                        case 200:
                            resolve(_data.body)
                            break
                        case 403:
                            // alert('未登录');
                            // window.location.assign('/#/public-message');
                            console.log(403)
                            break
                        case 419:
                            thisVue.$store.commit('clearLogin')
                            window.location.assign('/#/pub-message')
                            reject(_data.message)
                            break
                        default:
                            reject(_data.message)
                    }
                })
                .catch(function(err) {
                    reject(err + '请求错误！')
                })
        })
    }
}

const vueRequest = {}
vueRequest.install = function(Vue, options) {
    Vue.prototype.getData = getData(Vue, options) // 附在原型
}

export default vueRequest
