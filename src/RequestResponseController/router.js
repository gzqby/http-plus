const reqRegistry = require('./reqRegistry');
const {getRequestHandler} = require('./utils');

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
    end: (something) => {
      //dosomething
      res.end(something);
    },
    send: (something)=>{
      res.end(JSON.stringify(something));
    },
    nativeResponse: res,
  }
}

// todo:中间件 wrapReq wrapRes
module.exports.router = (method, url, req, res) => {
  const {cb} = getRequestHandler(reqRegistry, method, url);
  const reqP = reqPlus(req);
  const resP = resPlus(res);
  // console.log(res.__proto__.__proto__);
  if (cb) {
    return cb(reqP, resP);
  }
  return res.end('NOT FIND');
};
