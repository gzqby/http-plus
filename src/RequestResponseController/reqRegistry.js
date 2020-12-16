const { methodUrlEncrypt } = require('./utils');

const store = new Map();

const reqRegistry = {
  add(method, url, cb) {
    return store.set(methodUrlEncrypt(method, url), cb);
  },
  has(method, url) {
    return store.has(methodUrlEncrypt(method, url));
  },
  get(method, url) {
    return store.get(methodUrlEncrypt(method, url));
  },
};

// clear, set, has, delete, get

module.exports = reqRegistry;
