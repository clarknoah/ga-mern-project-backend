const User = require("../../db/models/User");


const ctrl = {
  createComment: (req, res) => {
    User.findOneAndUpdate(
      { handle: req.params.handle },
      {
        $push: {
          tweeps: req.body
        }
      },
      { new: true }
    ).then(comment => {
      res.json(comment);
    });
    console.log(req);
  }
};
module.exports = ctrl;
