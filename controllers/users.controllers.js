const User = require('../models/user.model')

const signUp = (req, res) => {
  res.render('users/signUp')
}

const signIn = (req, res) => {
  res.render('users/signIn')
}

module.exports = {
  signUp,
  signIn,
}