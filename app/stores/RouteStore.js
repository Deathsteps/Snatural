module.exports = {
  start: 'OrderList',

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
  },
  AddressList: {
    component: require('../pages/AddressList'),
    title: '地址管理'
  },
  AddressEdit: {
    component: require('../pages/AddressEdit'),
    title: '地址编辑'
  },
  Distribution: {
    component: require('../pages/Distribution'),
    title: '分销管理'
  },
  Shop: {
    component: require('../pages/Shop'),
    title: '店铺管理'
  }
}
