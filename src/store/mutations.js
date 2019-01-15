export default {
    setUserInfo(state, info) {
        state.userInfo = info
        window.sessionStorage.userInfo = JSON.stringify(info)
    },
    clearLogin(state) {
        state.menu = null
        state.userInfo = null
        window.sessionStorage.removeItem('userInfo')
    }
}
