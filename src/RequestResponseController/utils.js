module.exports.methodUrlEncrypt = (method, url) => {
  if(method===undefined || url===undefined) throw new Error(`function methodUrlEncrypt must to have two argments!`);
  return `${method}___${url}`.toUpperCase();
}
