const { router } = require('./router.js');

const parseMethodFromReq = (req) => req.method;

const parseRequestUrlFromReq = (req) => req.url;

const internalController = () => (req, res) => {
  const method = parseMethodFromReq(req);
  const url = parseRequestUrlFromReq(req);
  router(method, url, req, res);
};

exports.controller = internalController();
