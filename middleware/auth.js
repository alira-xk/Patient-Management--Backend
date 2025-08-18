const jwt = require('jsonwebtoken');

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      return res.status(401).json({ error: 'Token missing.' });
    }

    const decoded = jwt.verify(token, 'your_jwt_secret_key');

    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid or expired token.' });
  }
};

module.exports = auth;