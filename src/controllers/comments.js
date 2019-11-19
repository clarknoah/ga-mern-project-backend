const User = require("../../db/models/User");

const ctrl = {
  createComment: (req, res) => {
    User.findOneAndUpdate(
      {
        handle: req.params.handle,
        "tweep._id": req.params.id
      },
      {
        $push: {
          comments: req.body
        }
      }
    ).then(comments => {
      res.json(comments);
    });
  }
};

module.exports = ctrl;
