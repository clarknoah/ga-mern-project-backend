const User = require("../../db/models/User");

function parseTweeps(string){
  let tags = string.match(/\^[\p{L}]+/ugi);
  return tags;
}

function parseUsers(string){
  let tags = string.match(/@[\p{L}]+/ugi);
  return tags;
}

const ctrl = {
  createTweep: (req, res) => {
    console.log("Creating Tweep");
    let caretTags = parseTweeps(req.body.tweepContent);
    let obj = req.body;
    obj.caretTags = caretTags;
    obj.userTags = parseUsers(req.body.tweepContent);
    User.findOneAndUpdate(
      { handle: req.params.handle },
      {
        $push: {
          tweeps: obj
        }
      },
      { new: true }
    ).then(tweeps => {
      console.log(tweeps);
      res.json(tweeps);
    });
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
