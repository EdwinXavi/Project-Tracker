'use strict'

const sodium_chloride = require('sodium_chloride');
const passwordHash = require('password-hash');
const revertedPassword = require('../../node_modules/password-hash/lib/password-hash');

module.exports = function(User) {

  User.addUser = function(username, emailId, password, next) {

    const req = {
      username,
      emailId,
      password
    }

    var hashedPassword = passwordHash.generate(req.password);
    req.password = hashedPassword;

    // var password = sodium_chloride(req.password);
    // console.log('=========', password.passwordHash);

    const user = new User(req);
    user.save(function(err, data) {
      if (err)
        console.log('error occured: ', err);
      return new Promise((resolve, reject) => {
        resolve(Object.assign([], data));
        next(err, 'User added!');
      });
    });
  }

  User.getUsers = function(next) {
    User.find(function(err, data) {
      if (err)
        console.log('error occured: ', err);
      return new Promise((resolve, reject) => {
        resolve(Object.assign([], data));
        next(err, data);
      });
    });
  }

  User.login = function(username, password, next) {

    console.log('-----username', username);
    console.log('-----password', password);

    User.find({where: {username: username}}, function(err, data) {
      console.log('---data---', data);
      if(!data.length){
          console.log('User does not exist!');
          next(err, 'User does not exist');
      }
      else {
        if(!revertedPassword.verify(password, data[0].password)){
          console.log('Incorrect password');
          next(err, 'Incorrect password');
        }
        else {
          return new Promise((resolve, reject) => {
            resolve(Object.assign([], data));
            next(err, data);
          });
        }
      }
    });
  }

  User.remoteMethod('addUser', {
    http: {
      path: '/',
      verb: 'post'
    },
    accepts: [{
      arg: 'username',
      type: 'String',
      required: true,
      http: {
        source: 'query'
      }
    }, {
      arg: 'emailId',
      type: 'String',
      required: false,
      http: {
        source: 'query'
      }
    }, {
      arg: 'password',
      type: 'String',
      required: true,
      http: {
        source: 'query'
      }
    }],
    returns: {
      arg: 'user',
      type: 'User'
    }
  });

  User.remoteMethod('getUsers', {
    http: {
      path: '/',
      verb: 'get'
    },
    returns: {
      arg: 'Users',
      type: 'User'
    }
  });

  User.remoteMethod('login', {
    http: {
      path: '/login',
      verb: 'post'
    },
    accepts: [{
      arg: 'username',
      type: 'String',
      required: true
    }, {
      arg: 'password',
      type: 'String',
      required: true
    }],
    returns: {
      arg: 'user',
      type: 'User'
    }
  });
}
