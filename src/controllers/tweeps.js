const User = require("../../db/models/User");

const ctrl = {
  createTweep: (req, res) => {
    console.log("Creating Tweep");
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
    console.log("deleting tweep");
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
    console.log("Updating Tweep");
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
  readTweep: (req, res) => {
    console.log("Reading Tweep");
    User.findOne(
      {
        handle: req.params.handle,
        "tweeps._id": req.params.id
      },
      { "tweeps.$": 1 }
    ).then(tweeps => {
      res.json(tweeps.tweeps[0]);
    });
  },

  readTweeps: (req, res) => {
    console.log("Reading Tweep");
    User.findOne(
      {
        handle: req.params.handle
      }
    ).then(tweeps => {
      res.json(tweeps.tweeps);
    });
  }
};

module.exports = ctrl;
