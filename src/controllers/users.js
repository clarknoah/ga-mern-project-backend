const User = require("../../db/models/User");

const ctrl = {
  createUser: (req, res) => {
    console.log("Creating User");
    User.create(user).then(result => {
      console.log(result);
      res.json(result);
    });
  },
  deleteUser: (req, res) => {
    console.log("deleting User");
    User.remove(
      {
        handle: req.params.handle
      }
    ).then(tweeps => {
      res.json(tweeps);
    });
  },
  updateUser: (req, res) => {
    console.log("Updating User");
    User.findOneAndUpdate(
      { handle: req.params.handle},
      {
        $set: req.body
      }
    ).then(tweeps => {
      res.json(tweeps);
    });
  },
  readUser: (req, res) => {
    console.log("Reading User");
    let handle = req.params.handle;
    console.log(handle);
    User.find({ handle: handle }).then(result => {
      console.log(result);
      res.json(result);
    });
  }
};

module.exports = ctrl;
