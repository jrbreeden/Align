const Resume = require('../../models/M-resume');
const User = require('../../models/M-user')
const UserCtrl = require('./C-users')

const addNewResume = async (req, res) => {
  req.body.skills = req.body.skills.map((skill) => {
    skill = { skill: skill.skill, priority: skill.priority };
    return skill;
  });
  //console.log(req.body);
  let newResume;
  const token = await UserCtrl.createNewJWT(req.body.user)
  Resume.deleteOne({ user: req.body.user }).then((del) => {
    console.log('deleted ', del);
    Resume.create(req.body)
      .then((response) => {
        newResume = response;
        console.log('returning JWT afte resume submit' , token)
        //console.log('neewwResume', newResume);
        res.status(200).json(token);
      })
      .catch((err) => {
        console.log(err);
        res.status(500)
      });
  });
};

const getResume = async (req, res) => {
  console.log('finding resume for id , ', req.body.id);
  Resume.findOne({ user: req.body.id })
    .then((doc) => {
      console.log('returned the users resume from c-res as ,', doc);
      res.json(doc);
    })
    .catch((err) => {
      console.log('Error retreiving user resume from c-resume', err);
    });
};

module.exports = {
  addNewResume,
  getResume,
};
