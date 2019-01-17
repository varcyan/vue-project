let _sessionStorage = window.sessionStorage
const USERINFO = 'USERINFO' // 用户信息
const MAPLIST = 'MAPLIST'   // 列表
const IS_LOGIN = 'IS_LOGIN' // 登录状态

export default {
    [USERINFO](state) {
        state.userInfo =
            state.userInfo ||
            (_sessionStorage.userInfo
                ? JSON.parse(_sessionStorage.userInfo)
                : {})
        return state.userInfo
    },
    [MAPLIST](state) {
        return state.mapList
    },
    [IS_LOGIN](state) {
        return state.isLogin = !!state.userInfo.userName
    }
}
