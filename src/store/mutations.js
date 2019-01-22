import {
    SET_USERINFO,
    ESC_USERINFO,
    SET_MENULIST,
    SET_BREADLIST
} from './mutation_types.js'

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
    },
    [SET_BREADLIST](state, info) {    // 设置面包屑某一级内容
        let _levelNum = info.level.split('_')[1] - 1
        state.breadList[_levelNum] = info
        state.breadList.forEach((item, index) => {
            if (index > _levelNum) {
                console.log(state.breadList.splice(index))
            }
        })
        state.breadList = state.breadList.reverse().reverse()
        console.log(state.breadList)
    }
}
