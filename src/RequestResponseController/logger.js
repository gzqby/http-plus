const fs = require('fs');

exports.logger = (url) => fs.createWriteStream(url);
