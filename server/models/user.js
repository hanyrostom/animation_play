var db = require('./db');

var User = {};

User.findByUsername = function(username) {
  return db('users').where({ username: username }).select('*')
    .then(function(user) {
      return user;
    })
    .catch(function(err) {
      console.error(err)
    });
};

// TODO: ADD MORE MODEL FUNCTIONS HERE
User.addNewUser = function(newUser,newPassword) { //newUser object
  return db('users').insert([{username: newUser, password: newPassword}])
    .then(function(newUser) {
      console.log(newUser);
    })
    .catch(function(err) {
      console.error(err)
    });
};

User.findUsernameId = function(username,cb) {
  return db('users').where({ username: username }).select('id')
    .then(function(user) {
      return(user[0].id);
    })
    .catch(function(err) {
      console.error(err)
    });
};

// db('users').select().then(res => console.log(res));

// User.addNewUser('Ian','temp2');
// User.findByUsername('Mandy');
module.exports = User;
User.findUsernameId('Ian')