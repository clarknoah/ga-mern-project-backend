
<<<<<<< HEAD
=======
const ctrl = {
  createComment: (req, res) => {
    console.log("Creating Comment");
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
    console.log("Deleting Comment");
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
  },
  updateComment: (req, res) => {
    console.log("Updating Comment");
    User.findOne(
      {
        handle: req.params.handle,
        "tweeps.comments._id": req.params.cId
      }
    ).then(comments => {
      comments.tweeps
        .id(req.params.id)
        .comments
        .id(req.params.cId)
        .commentContent = req.body.commentContent;
      comments.save();
      console.log(comments.tweeps.id(req.params.id).comments.id(req.params.cId));
      res.json(comments);
    });
  },
  readComment: (req, res) => {
    console.log("Reading Comment");
    User.findOne(
      {
        "tweeps._id":req.params.id,
        "tweeps.comments._id":req.params.cId
      },
      {"tweeps.comments.$":1}
    ).then(comments => {
      comments = comments.tweeps[0].comments.filter((val)=>{
        return val._id.toString() == req.params.cId.toString()
      })
      res.json(comments[0]);
    });
  }
};


module.exports = ctrl;
>>>>>>> c19fb596092599037ca9c8cdba5e2b8eaea312bb
