const reqRegistry = require('./reqRegistry');
const {getRequestHandler} = require('./utils');
const {getMiddleWare} = require('./middleware');

const reqPlus = (req) => {
  const { 
    httpVersionMajor,
    httpVersionMinor,
    httpVersion,
    complete,
    headers,
    rawHeaders,
    url,
    method,
  } = req;
  return {
    httpVersionMajor,
    httpVersionMinor,
    httpVersion,
    complete,
    headers,
    rawHeaders,
    url,
    method,
    nativeRequest: req,
  }
}

const resPlus = (res) => {
  const { 
    chunkedEncoding,
    shouldKeepAlive,
    sendDate,
    server,
    writeHead,
    writeHeader,
    destroy,
    setHeader,
    getHeader,
    getHeaderNames,
    getHeaders,
    hasHeader,
    write,
    end,
  } = res;
  return {
    chunkedEncoding,
    shouldKeepAlive,
    sendDate,
    server,
    writeHead,
    writeHeader,
    destroy,
    setHeader,
    getHeader,
    getHeaderNames,
    getHeaders,
    hasHeader,
    write,
    end(something) {
      //dosomething
      if(something) {
        res.end(something);
      }else{
        res.end(' ');
      }
    },
    send(something) {
      res.end(JSON.stringify(something));
    },
    status(num) {
      res.statusCode = num;
      return this;
    },
    nativeResponse: res,
  }
}

// todo:中间件 wrapReq wrapRes
module.exports.router = (method, url, req, res) => {
  const cb = getRequestHandler(method, url, reqRegistry, getMiddleWare());
  const reqP = reqPlus(req);
  const resP = resPlus(res);
  // console.log(res.__proto__.__proto__);
  if (cb) {
    return cb(reqP, resP);
  }
  return resP.status(404).end('NOT FOUND');
};
