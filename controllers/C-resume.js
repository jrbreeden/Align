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

const getResume = async(req,res)=>{
  Resume.findOne({user:req.body.id}).then((doc)=>{
    console.log('returned the users resume from c-res as ,' , doc)
    res.json(doc)
  }).catch((err)=>{
    console.log('Error retreiving user resume from c-resume' , err)
  })
}


module.exports = {
  addNewResume,
  getResume
};
