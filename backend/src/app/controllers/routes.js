const express = require('express');
const auth = require('./authController');

const router = express.Router();


router.get('/', (req, res) => {
  res.send(" "+ User.db.id);
});

router.post('/register', async (req, res) => {
    auth.register(req,res);
});

router.post('/authenticate', async (req, res) => {
    auth.authenticate(req,res);
});

router.post('/forgot_password', async (req, res) => {
    auth.forgot_password(req,res);
});

router.post('/reset_password', async (req, res) => {
    auth.reset_password(req,res);
});

module.exports = app => app.use('/', router);
