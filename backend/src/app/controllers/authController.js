const User = require('../models/user');

exports.register = async function(req,res) {
  const { email, password } = req.body;

  try {
    if (await User.findOne({ email }))
      return res.status(400).send({ error: 'User already exists' });

    const user = await User.create(req.body);

    return res.send(user);
  } catch (err) {
    return res.status(400).send({ error: '' + err });
  }
};

exports.authenticate = async function(req,res) {
  const { email, password } = req.body;

  const loggedUser = await User.findOne({ email }).select('+password');

  if (!loggedUser)
    return res.status(400).send({ error: 'User not found' });

  if (password != loggedUser.password)
    return res.status(400).send({ error: 'Invalid password' });

  loggedUser.password = undefined;

  res.send(loggedUser);
};

exports.reset_password = async function(req,res) {
  const { email, password, newPassword } = req.body;

  try {
    const user = await User.findOne({ email }).select('+password');

    if (!user)
      return res.status(400).send({ error: 'User not found' });

    if(password == user.password){
      user.password = newPassword;
    }else{
      res.status(400).send({ error: 'Cannot reset password, wrong password' });
    }

    await user.save();

    res.send();

  } catch (err) {
    res.status(400).send({ error: 'Cannot reset password, try again' });
  }
};

exports.modifyUser = async function(req,res) {
  try {
    User.findByIdAndUpdate(loggedUser.id, req.body);
  } catch (err) {
    return res.status(400).send({ error: '' + err });
  }

};

exports.showUsers = async function(req,res){
  
  const users = await User.find({});

  return res.send(users);

}