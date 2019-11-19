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
      { handle: req.params.handle },
      {
        tweeps: {
          _id: req.params.id
        }, req.body, {new: true}
      },
    ).then(tweeps => {
      res.json(tweeps);
    });
  }
};

module.exports = ctrl;
