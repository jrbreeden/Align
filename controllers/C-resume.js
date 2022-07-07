const Resume = require('../models/M-resume');

const addNewResume = async (req, res) => {
  // try {
  //   if (req.body) {
  //     req.body.skills = req.body.skills.map((skill) => ({
  //       skill: skill.skill,
  //       priority: skill.priority,
  //     }));
  //   }

  // const newResume = await Resume.create(req.body);
  let newResume;
  Resume.create(req.body)
    .then((response) => {
      newResume = response;
      console.log('neewwResume', newResume);
      res.status(200);
    })
    .catch((err) => {
      console.log(err);
    });
};
// console.log('new resume', newResume);
// res.status(200).json(newResume);
// } catch (e) {
//   // console.log('Error finding applied jobs for user ', req);
//   res.status(500).json({ message: e.message });
// }
// };

module.exports = {
  addNewResume,
};
