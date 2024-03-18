// middlewares/validationMiddleware.js
function validateUserData(req, res, next) {
    if (!req.body.name || !req.body.email) {
      return res.status(400).json({ message: 'Name and email are required' });
    }
    next();
  }
  
  module.exports = { validateUserData };
  