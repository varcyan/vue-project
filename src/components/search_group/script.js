import {} from 'vuex'

export default {
    props: {},
    data() {
        return {
        }
    },
    methods: {
        querySearch(queryString, cb) {
            var restaurants = this.MENULIST
            var results = queryString
                ? restaurants.filter(this.createFilter(queryString))
                : restaurants
            // 调用 callback 返回建议列表的数据
            cb(results)
        },
        createFilter(queryString) {
            return restaurant => {
                return restaurant.value.indexOf(queryString) === 0
            }
        },
        handleSelect(item) {
            console.log(item)
        }
    }
}
