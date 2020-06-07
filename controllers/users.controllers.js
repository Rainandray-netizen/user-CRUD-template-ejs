const User = require('../models/user.model')
const bcrypt = require('bcrypt')
const saltRounds = 10

const signUp = (req, res) => {
  res.render('users/signUp')
}

const signIn = (req, res) => {
  res.render('users/signIn')
}

const register = (req, res) => {
  const { username, email, password1, password2 } = req.body
  // console.log(req.body)
  //what to do with the information here?
  //TODO:

  //ensure the email does not already exist in the database
  //do the same with user

  if(password1===password2){

    bcrypt.hash(password1, saltRounds, (err, hash) => {
      // Store hash in your password DB.
    })

  }

  res.render('users/signUp')
}

module.exports = {
  signUp,
  signIn,
  register,
}