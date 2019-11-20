const User = require("../../db/models/User");

const ctrl = {
  createComment: (req, res) => {
    User.findOneAndUpdate(
      {
        handle: req.params.handle,
        "tweeps._id": req.params.id
      },
      {
        $push: {
          "tweeps.$.comments": req.body
        }
      },
      { new: true }
    ).then(comments => {
      res.json(comments);
    });
  },
  deleteComment: (req, res) => {
    User.updateOne(
      {
        handle: req.params.handle,
        "tweeps._id": req.params.id
      },
      {
        $pull: {
          "tweeps.$.comments": {
            _id: req.params.cId
          }
        }
      }
    ).then(comments => {
      console.log(comments);
      res.json(comments);
    });
  }
};

module.exports = ctrl;
