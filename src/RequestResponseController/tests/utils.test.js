const {methodUrlEncrypt} = require('../utils')

describe('methodUrlEncrypt', ()=>{
  test('one upcase and one lowcase', ()=>{
    expect(methodUrlEncrypt('POST', '/inc')).toBe('POST___/INC');
  });
  test('two lowcase', ()=>{
    expect(methodUrlEncrypt('get', '/')).toBe('GET___/');
  });
  test('one argument', ()=>{
    expect(()=>methodUrlEncrypt('get')).toThrow();
  });
})