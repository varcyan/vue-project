let _sessionStorage = window.sessionStorage

export default {
    userInfo(state) {
        state.userInfo = state.userInfo || (_sessionStorage.userInfo ? JSON.parse(_sessionStorage.userInfo) : {})
        return state.userInfo
    },
    mapList(state) {
        return state.mapList
    }
}
