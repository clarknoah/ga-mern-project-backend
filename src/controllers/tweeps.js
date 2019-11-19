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
    ).then(tweep => {
      res.json(tweeps);
    });
    console.log(req);
  }
};

module.exports = ctrl;

//dummy comment from tweeproutes branch

// Users.findOneAndUpdate({ name: req.user.name }, { $push: { friends: friend } });
// };

// SuperBowl.findOneAndUpdate(
//   { super_bowl: performance.super_bowl },
//   {
//     $push: {
//       halftimePerformer: {
//         super_bowl: performance.super_bowl,
//         musician: performance.musician,
//         num_songs: performance.num_songs
//       }
//     }
//   },
//   { new: true }
// );
