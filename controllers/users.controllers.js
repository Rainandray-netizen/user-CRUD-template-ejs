const User = require('../models/user.model')

const signUp = (req, res) => {
  res.render('users/signUp')
}

const signIn = (req, res) => {
  res.render('users/signIn')
}

const register = (req, res) => {
  console.log(req.body)
}

module.exports = {
  signUp,
  signIn,
  register,
}