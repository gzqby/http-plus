const http = require('http');

const { requestResponseController } = require('./index');
const reqRegistry = require('./reqRegistry');
const {useMiddleWare, middlewareCanPlusFunc, getMwIndex} = require('./middleware');

function httpPlus({preUrl}={}) {
  return {
    get(url, cb) {
      this.bindReq('get', url, cb);
    },

    post(url, cb) {
      this.bindReq('post', url, cb);
    },

    put(url, cb) {
      this.bindReq('put', url, cb);
    },

    delete(url, cb) {
      this.bindReq('delete', url, cb);
    },

    connect(url, cb) {
      this.bindReq('connect', url, cb);
    },

    head(url, cb) {
      this.bindReq('head', url, cb);
    },

    options(url, cb) {
      this.bindReq('options', url, cb);
    },

    patch(url, cb) {
      this.bindReq('patch', url, cb);
    },

    trace(url, cb) {
      this.bindReq('trace', url, cb);
    },

    bindReq(method, url, cb) {
      middlewareCanPlusFunc(true);
      const mwIndex = getMwIndex();
      reqRegistry.add(method, url, {cb, mwIndex});
    },

    listen(port, cb) {
      const server = http.createServer((req, res) => {
        requestResponseController(req, res);
      });
      server.listen(port, cb);
    },
    use(url, cb) {
      if(url){
        if(typeof url === 'function'){
          useMiddleWare(url);
          return;
        }
      }
      //todo: 外置路由Router
    }
  };
}

module.exports = httpPlus();
