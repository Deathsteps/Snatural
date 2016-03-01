exports.HOST = 'http://snatural.com.cn/';

let { InteractionManager } = require('react-native');

const callbackAfterInteractions = (callback, err, data) => {
  InteractionManager.runAfterInteractions(
    () => callback(err, data)
  );
}

exports.post = (url, params, callback) => {
  fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(params)
  })
  .then((res) => res.json())
  // success
  .then((data) => callbackAfterInteractions(callback, null, data))
  // fail
  .catch((err) => callbackAfterInteractions(callback, err, null))
}