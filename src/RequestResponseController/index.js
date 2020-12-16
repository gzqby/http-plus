const { controller } = require('./controller');

const requestResponseController = (req, res) => {
  controller(req, res);
};

module.exports.requestResponseController = requestResponseController;
