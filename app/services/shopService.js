const { post, HOST } = require('./ajax');

const SERVICE_URL = HOST + 'interface/oneDistributorStoreManager';

exports.fetchShopInfo = (params, callback) => {
  post(SERVICE_URL + '/getStoreInfo', params, callback);
}