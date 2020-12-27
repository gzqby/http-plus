const methodUrlEncrypt = (method, url) => {
  if(method===undefined || url===undefined) throw new Error(`function methodUrlEncrypt must to have two argments!`);
  return `${method}___${url}`.toUpperCase();
}

const getRequestHandler = (reqRegistry, method, url) => {
  // todo: 路由分级
  return reqRegistry.get(method, url);
}

module.exports = {methodUrlEncrypt, getRequestHandler};