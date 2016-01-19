module.exports = {
	start: 'Index',
	
	Index: {
		component: require('../pages/Index'),
		title: '首页'
	},
	Detail: {
		component: require('../pages/Detail'),
		title: '产品详情'
	},
	OrderList: {
		component: require('../pages/OrderList'),
		title: '订单列表'
	},
	OrderDetail: {
		component: require('../pages/OrderDetail'),
		title: '订单详情'
	}
}