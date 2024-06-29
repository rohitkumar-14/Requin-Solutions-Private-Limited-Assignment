const express = require('express');
const router = express.Router();

// Middleware to verify token
const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization').replace('Bearer ', '');
  if (!token) return res.status(401).send('Access denied');

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(400).send('Invalid token');
  }
};

// Dashboard routes based on role
router.get('/dashboard', authMiddleware, (req, res) => {
  const { role } = req.user;
  switch (role) {
    case 'Admin':
      res.send('Welcome Admin to Admin Dashboard');
      break;
    case 'Moderator':
      res.send('Welcome Moderator to Moderator Dashboard');
      break;
    case 'User':
      res.send('Welcome User to User Dashboard');
      break;
    default:
      res.status(403).send('Unauthorized');
  }
});

module.exports = router;
