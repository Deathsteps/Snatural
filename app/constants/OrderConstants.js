const ORDER_STATUS = {
  WAIT_PAY     : 1,
  WAIT_DEAL    : 2,
  WAIT_DELIVER : 3,
  DELIVERING   : 4,
  COMPLETED    : 5,
  CANCELED     : 6,
  CLOSED       : 7
}

const ORDER_STATUS_TEXT = {
  [ORDER_STATUS.WAIT_PAY]     : '待支付',
  [ORDER_STATUS.WAIT_DEAL]    : '待处理',
  [ORDER_STATUS.WAIT_DELIVER] : '待发货',
  [ORDER_STATUS.DELIVERING]   : '运输中',
  [ORDER_STATUS.COMPLETED]    : '已完成',
  [ORDER_STATUS.CANCELED]     : '已取消',
  [ORDER_STATUS.CLOSED]       : '已关闭' 
}

module.exports = {
  ORDER_STATUS,
  ORDER_STATUS_TEXT
}


