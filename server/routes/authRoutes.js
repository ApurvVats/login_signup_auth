const router = require('express').Router();
const { signup, login, protectedRoute } = require('../controllers/authController');
const verifyToken = require('../middleware/auth');

router.post('/signup', signup);
router.post('/login', login);

// Protected route example:
router.get('/protected', verifyToken, (req, res) => {
  res.json({ message: "Protected route accessed successfully", user: req.user });
});

module.exports = router;
