const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const dashboardRoutes = require('./routes/dashboard');
const authMiddleware = require('./routes/authMiddleware');
const app = express();

app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/role_based_app');

app.use('/api', authMiddleware);
app.use('/api/auth', authRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.get('/api/protected', (req, res) => {
    res.send(`Welcome ${req.user.role}! This is a protected route.`);
  });
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
