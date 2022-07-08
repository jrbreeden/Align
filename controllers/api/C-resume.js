const Resume = require('../../models/M-resume');

const addNewResume = async (req, res) => {
  let newResume;
  Resume.deleteOne({user: req.body.user}).then((del)=>{
    console.log('deleted ' , del)
    Resume.create(req.body)
    .then((response) => {
      newResume = response;
      console.log('neewwResume', newResume);
      res.status(200);
  })
    .catch((err) => {
      console.log(err);
    });
  })
  
};

const getResume = async(req,res)=>{
  console.log('finding resume for id , ' ,req.body.id)
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
