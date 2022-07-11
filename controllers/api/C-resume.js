const Resume = require('../../models/M-resume');
const User = require('../../models/M-user');
const { createNewJWT } = require('./C-users');

const addNewResume = async (req, res) => {
  req.body.skills = req.body.skills.map((skill) => {
    skill = { skill: skill.skill, priority: skill.priority , tags:skill.tags };
    return skill;
  });
<<<<<<< HEAD
  //console.log(req.body);
  let newResume;
  const token = await createNewJWT(req.body.user);
  await Resume.deleteOne({ user: req.body.user });
  newResume = await Resume.create(req.body);
  console.log('tokiinn', token);
  res.status(200).json(token)

  // Resume.deleteOne({ user: req.body.user }).then((del) => {
  //   console.log('deleted ', del);
  //   Resume.create(req.body)
  //     .then((response) => {
  //       newResume = response;
  //       console.log('returning JWT afte resume submit', token);
  //       //console.log('neewwResume', newResume);
  //       if (token) {
  //         console.log('test', token);
  //       }
  //       // res.status(200).json(token);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       res.status(500);
  //     });
  // });
=======
  console.log('resume controller skills',req.body.skills);
  Resume.deleteOne({ user: req.body.user }).then((del) => {
    console.log('deleted ', del);
    Resume.create(req.body)
      .then(async (response) => {
        const token = await UserCtrl.createJWT(req.body.user)
        console.log('returning JWT after resume submit' , token)
        //console.log('neewwResume', newResume);
        res.json(token);
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(500)
      });
  });
>>>>>>> 9f4719e754eb2877bfc06af7409e1d57ba2abaea
};

const getResume = async (req, res) => {
  console.log('finding resume for id , ', req.body.id);
  Resume.findOne({ user: req.body.id })
    .then((doc) => {
      // console.log('returned the users resume from c-res as ,', doc);
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
