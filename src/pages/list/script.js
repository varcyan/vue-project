export default {
    data() {
        return {
            addFormData: {
                provinceCode: '',
                cityCode: '',
                countyCode: ''
            },
            ruleValidate: {
                // countyCode: [{
                //     required: true,
                //     message: '审批部门不能为空',
                //     trigger: 'blur'
                // }],
            },
            list: [],
            filterTab: '',
            department: {
                //部门列表
                list: [
                    {
                        value: 'qhshbt',
                        label: '青海省环保厅'
                    }
                ],
                defaultValue: 'qhshbt'
            },
            removeStatus: {
                //删除弹出框状态
                visible: false,
                loading: true
            },
            addStatus: {
                //新增弹出框状态
                visible: false,
                loading: false
            },
            page: 1,
            pageSize: 20,
            total: 40,
            currentData: {}
        }
    },
    route: {
        path: '/list',
        meta: {
            title: 'list'
        }
    }
}
