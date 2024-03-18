// middlewares/loggerMiddleware.js
function logRequest(req, res, next) {
    console.log(`${req.method} ${req.url}`);
    next();
  }
  
  function logError(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Internal Server Error');
  }
  
  module.exports = { logRequest, logError };
  