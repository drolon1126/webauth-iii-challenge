const router = require('express').Router();

const Users = require('./user-model.js');
const restricted = require('../auth/restricted.js');

router.get('/', restricted, (req, res) => {
  Users.find()
    .then(users => {
     res.json({loggedInUser: req.username, users:users});
    })
    .catch(err => res.send(err));
});

module.exports = router;
