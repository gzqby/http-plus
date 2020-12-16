const reqRegistry = require('./reqRegistry');

// todo:中间件 wrapReq wrapRes
module.exports.router = (method, url, req, res) => {
  const cb = reqRegistry.get(method, url);
  if (cb) {
    return cb(req, res);
  }
  return res.end('NOT FIND');
};
