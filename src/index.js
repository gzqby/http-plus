const app = require('./RequestResponseController/httpPlus');

const PORT = process.env.PORT || 3000;

app.use(function name1(req, res, next){
  console.log(req.url=1,res.chunkedEncoding);
  console.log('name1');
  // next();
})
app.use(function name2(req, res, next){
  console.log(req.url=2,res.chunkedEncoding);
  console.log('name2');
  // next();
})

app.get('/', (req, res, next) => {
  console.log(req.url);
  // next();
  res.end('hello world');
});
app.use(function name3(req, res){
  console.log(req.url,res.chunkedEncoding);
  console.log('name3');
  // next();
})

app.listen(PORT);

app.get('/hello', (req, res) => {
  console.log(req.url);
  res.end('hello');
});

app.use(function name4(req, res){
  console.log(req.url,res.chunkedEncoding);
  console.log('name4');
})