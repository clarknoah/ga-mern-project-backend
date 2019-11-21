const User = require("../../db/models/User");

const ctrl = {
  followUser: (req, res) => {
    console.log("Following User");
    User.findOneAndUpdate(
      { handle: req.params.handle },
      {
        $push: {
          followingo: req.body.follow
        }
      },
      { new: true }
    ).then(tweeps => {
      res.json(tweeps);
    });
    console.log(req);
  },
  unfollowUser: (req, res) => {
    console.log("Unfollowing User");
    User.update(
      {
        handle: req.params.handle
      },
      {
        $pull: {
          following: req.body.unfollow
        }
      }
    ).then(tweeps => {
      res.json(tweeps);
    });
  },
  searchUsers: (req, res) => {

    console.log("searching for user");
    let user = req.body;
    console.log(user);
    User.find({
      handle:{$regex : `.*${req.body.handle}.*`}
    }).then(result => {
      console.log(result);

      User.aggregate([
        {$unwind:"$tweeps"},
        {$match:
          {"tweeps.tweepContent":{$regex : `.*${req.body.handle}.*`}
        }
      }]).then(res2=>{
        console.log(res2);
        let final = {
          users: result,
          tweeps: res2
        }
        res.json(final);
      })

    });
  },
  createUser: (req, res) => {
    console.log("Creating User");
    let user = req.body;
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
