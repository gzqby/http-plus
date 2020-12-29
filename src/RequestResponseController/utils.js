const methodUrlEncrypt = (method, url) => {
  if(method===undefined || url===undefined) throw new Error(`function methodUrlEncrypt must to have two argments!`);
  return `${method}___${url}`.toUpperCase();
}

const getRequestHandler = (method, url, reqRegistry, middlewares) => {
  // todo: 路由分级
  const { cb, mwIndex } = reqRegistry.get(method, url) || {};
  if (cb && typeof mwIndex === 'number') {
    const middlewareArr = middlewares.slice(0, mwIndex+1).concat([cb]);
    const middlewareFuncs = expandArray(middlewareArr);
    const newCb = middlewareFuncs.reduceRight((accumulator, current)=>{
      return (req, res) => {current(req, res);return accumulator(req, res);}
    });
    return newCb;
  }
}

const expandArray = (arr) => {
  return arr.reduce((accumulator, current)=>accumulator.concat(current));
}

module.exports = {methodUrlEncrypt, getRequestHandler};

