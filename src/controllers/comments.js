const User = require("../../db/models/User");
const Comment = require("../")


const ctrl = {
  createComment: (req, res) => {
    User.findByIdAndUpdate(
      { name: req.params.name },
      { $push: { tweeps: req } },
      { new: true }
    ).then(tweeps => {
      res.json(tweeps);
    })
    console.log(req);
  }
}

module.exports = ctrl;
