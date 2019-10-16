const router = require('express').Router();

const Users = require('./user-model.js');
//const restricted = require('../auth/restricted.js');

router.get('/', (req, res) => {
  Users.find()
    .then(users => {
     // res.json({loggedInUser: req.username, users:users});
      res.json(users);
    })
    .catch(err => res.send(err));
});

module.exports = router;
