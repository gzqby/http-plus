let mwIndex = 0;
const middlewares = [];
let middlewareCanPlus = false;

const mwIndexPlus = () => {
  mwIndex++;
};

const getMwIndex = () => {
  return mwIndex
}

const middlewareCanPlusFunc = (bool) => {
  middlewareCanPlus = bool;
}

const useMiddleWare = (middleware)=>{
  if(middlewareCanPlus) mwIndexPlus();
  if(!middlewares[mwIndex]){
    middlewares[mwIndex]=[];
  }
  middlewares[mwIndex].push(middleware);
  middlewareCanPlusFunc(false);
}

const getMiddleWare = () => {
  return middlewares;
}

module.exports={useMiddleWare, mwIndexPlus, middlewareCanPlusFunc, getMiddleWare, getMwIndex};