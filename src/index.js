const app = require('./RequestResponseController/httpPlus');

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.end('hello');
});

app.listen(PORT);
