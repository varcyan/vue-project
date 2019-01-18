import {
    SET_USERINFO,
    ESC_USERINFO,
    SET_MENULIST
} from './mutation-types.js'
export default {
    [SET_USERINFO](state, info) {   // 设置用户信息
        state.userInfo = info
        window.sessionStorage.userInfo = JSON.stringify(state.userInfo)
    },
    [ESC_USERINFO](state) {
        state.userInfo = null
        window.sessionStorage.removeItem('userInfo')
    },
    [SET_MENULIST](state, info) {
        state.menuList = JSON.parse(JSON.stringify(info))
    }
}
