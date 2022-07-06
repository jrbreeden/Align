const Resume = require('../models/M-resume');

module.exports = {
  addNewResume,
};

const addNewResume = async (req, res) => {
  try {
    const newResume = await Resume.create(req.body);
    res.status(200).json(newResume);
  } catch (e) {
    // console.log('Error finding applied jobs for user ', req);
    res.status(500).json({ message: e.message });
  }
};
