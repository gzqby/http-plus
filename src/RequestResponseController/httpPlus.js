const http = require('http');

const { requestResponseController } = require('./index');
const reqRegistry = require('./reqRegistry');

function httpPlus({preUrl}={}) {
  return {
    get(url, cb) {
      reqRegistry.add('get', url, cb);
    },

    post(url, cb) {
      reqRegistry.add('post', url, cb);
    },

    put(url, cb) {
      reqRegistry.add('put', url, cb);
    },

    delete(url, cb) {
      reqRegistry.add('delete', url, cb);
    },

    connect(url, cb) {
      reqRegistry.add('connect', url, cb);
    },

    head(url, cb) {
      reqRegistry.add('head', url, cb);
    },

    options(url, cb) {
      reqRegistry.add('options', url, cb);
    },

    patch(url, cb) {
      reqRegistry.add('patch', url, cb);
    },

    trace(url, cb) {
      reqRegistry.add('trace', url, cb);
    },

    listen(port, cb) {
      const server = http.createServer((req, res) => {
        requestResponseController(req, res);
      });
      server.listen(port, cb);
    },
  };
}

module.exports = httpPlus();
