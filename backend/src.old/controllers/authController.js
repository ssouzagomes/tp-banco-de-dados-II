const express = require('express');
const user = require('../models/user');
const router = express.Router();

router.post('/register', async = function(req,res) => {
    const { email } = req.body;
  
    try {
      if (await User.findOne({ email }))
        return res.status(400).send({ error: 'User already exists' });
  
      const u = await user.create(req.body);
  
      u.password = undefined;
  
      return res.send({
        user,
        token: generateToken({ id: user.id }),
      });
    } catch (err) {
      return res.status(400).send({ error: 'Registration failed' });
    }
  });

module.exports = app => app.use('/auth', router);