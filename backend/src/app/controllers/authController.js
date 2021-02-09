const User = require('../models/user');
const loggedUser = undefined;

async function register(req, res) {
  const { email } = req.body;

  try {
    if (await User.findOne({ email }))
      return res.status(400).send({ error: 'User already exists' });

    const user = await User.create(req.body);

    user.password = undefined;

    return res.send({
      user,
      token: { id: user.id },
    });
  } catch (err) {
    return res.status(400).send({ error: '' + err });
  }
};

async function authenticate(req, res) {
  const { email, password } = req.body;

  const loggedUser = await User.findOne({ email }).select('+password');

  if (!loggedUser)
    return res.status(400).send({ error: 'User not found' });

  if (!await bcrypt.compare(password, loggedUser.password))
    return res.status(400).send({ error: 'Invalid password' });

  loggedUser.password = undefined;

  res.send({
    loggedUser,
    token: { id: user.id },
  });
};

async function forgot_password(req, res) {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user)
      return res.status(400).send({ error: 'User not found' });

    const now = new Date();
    now.setHours(now.getHours() + 1);

    await User.findByIdAndUpdate(user.id, {
      '$set': {
        passwordResetToken: token,
        passwordResetExpires: now,
      }
    });
  } catch (err) {
    res.status(400).send({ error: 'Error on forgot password, try again' });
  }
};

async function reset_password(req, res) {
  const { email, token, password } = req.body;

  try {
    const user = await User.findOne({ email })
      .select('+passwordResetToken passwordResetExpires');

    if (!user)
      return res.status(400).send({ error: 'User not found' });

    if (token !== user.passwordResetToken)
      return res.status(400).send({ error: 'Token invalid' });

    const now = new Date();

    if (now > user.passwordResetExpires)
      return res.status(400).send({ error: 'Token expired, generate a new one' });

    user.password = password;

    await user.save();

    res.send();
  } catch (err) {
    res.status(400).send({ error: 'Cannot reset password, try again' });
  }
};

async function modifyUser(req, res) {
  try {
    User.findByIdAndUpdate(loggedUser.id, req.body);
  } catch (err) {
    return res.status(400).send({ error: '' + err });
  }

};

