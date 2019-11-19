const User = require("../../db/models/User");

const ctrl = {
  createTweep: (req, res) => {
    User.findOneAndUpdate(
      { handle: req.params.handle },
      {
        $push: {
          tweeps: req.body
        }
      },
      { new: true }
    ).then(tweeps => {
      res.json(tweeps);
    });
    console.log(req);
  },
  deleteTweep: (req, res) => {
    User.update(
      {
        handle: req.params.handle
      },
      {
        $pull: {
          tweeps: {
            _id: req.params.id
          }
        }
      }
    ).then(tweeps => {
      res.json(tweeps);
    });
  },
  updateTweep: (req, res) => {
    User.findOneAndUpdate(
      { handle: req.params.handle, "tweeps._id": req.params.id },
      {
        $set: {
          "tweeps.$.tweepContent": req.body.tweepContent
        }
      }
    ).then(tweeps => {
      res.json(tweeps);
    });
  },
  showTweep: (req, res) => {
    User.findOne(
      {
        handle: req.params.handle,
        "tweeps._id": req.params.id
      },
      { "tweeps.$": 1 }
    ).then(tweeps => {
      res.json(tweeps.tweeps[0]);
    });
  }
};

module.exports = ctrl;

// User.findOne({ id: req.body.myId }).select({ Friends: { $elemMatch: { id: req.body.id } } }),
