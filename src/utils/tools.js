//根据id找到对应id所在的对象
export function getObjById(data, id) {
    let obj = null
    for (let i = 0; i < data.length; i++) {
        if (data[i].id === id) {
            obj = data[i]
            break
        }
        if (!obj && data[i].children) {
            obj = getObjById(data[i].children, id)
            if (obj) {
                break
            }
        }
    }
    return obj
}

// 根据id找到对应id对象的子集（如果存在）
export function getChildById(data, id) {
    let target = getObjById(data, id)
    if (target && target.children) {
        return target.children
    }
}

// 根据id获取自己以及自己所有的父级
export function getParentById(data, id) {
    let parArr = []
    let current = getObjById(data, id)
    if (current) {
        parArr.push(current)
        parArr = parArr.concat(getParentById(data, current.pid))
    }
    return parArr
}
