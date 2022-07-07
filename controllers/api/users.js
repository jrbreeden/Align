const User = require('../../models/M-user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const AppliedJobs = require('../../models/M-appliedJobs')

module.exports = {
  create,
  login,
  checkToken,
  appliedJobs
};

function checkToken(req, res) {
  console.log('req.user', req.user);
  res.json(req.exp);
}

async function login(req, res) {
  try {
    console.log('in controller with reqbody' , req.body)
    const user = await User.findOne({ email: req.body.email });
    if (!user) throw new Error();
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) throw new Error();
    res.json( createJWT(user) );
  } catch {
    res.status(400).json('Bad Credentials');
  }
}

async function create(req, res) {
  try {
    const user = await User.create(req.body);
    // token will be a string
    const token = createJWT(user);
    // send back the token as a string
    // which we need to account for 
    // in the client
    res.json(token);
  } catch (e) {
    res.status(400).json(e);
  }
}

async function appliedJobs(req,res){
  console.log('getting applied jobs - curr in controller')
  try{
    const appJobs = await User.findOne({_id : req.body.id})
    console.log('The test route works' , appJobs)
    res.json(appJobs)
  }catch(e){
    console.log('Error finding applied jobs for user ' , req)
    res.status(400).json(e);
  }
}


/*-- Helper Functions --*/

function createJWT(user) {
  return jwt.sign(
    // data payload
    { user },
    process.env.SECRET,
    { expiresIn: '24h' }
  );
}