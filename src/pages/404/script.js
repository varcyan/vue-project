export default {
	route: {
		path: '/404',
		meta: {
			title: '页面未找到',
		}
	},
	data () {
		return {
			
		}
	},
	beforeMount () {
        console.log('404:beforeMount ...')
    }
}