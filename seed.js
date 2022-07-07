const seedData = require('./seedData')

const { users, resume, appliedJobs } = seedData


require('dotenv').config();
require('./config/database');

const Resume = require('./models/M-resume');
const AppliedJobs = require('./models/M-appliedJobs')
const User = require('./models/M-user')


//console.log(resume, users , appliedJobs)
function seedDB() {
  let userID = null
  User.deleteMany({}).then(() => {
    User.create(users).then((u) => {
      console.log(u)
      userID = u._id
    }).then(() => {
      Resume.deleteMany({}).then(() => {
        Resume.create({ ...resume, user: userID }).then((r) => {
          console.log(r)
          AppliedJobs.deleteMany({}).then(() => {
            AppliedJobs.create({ ...appliedJobs, user: userID }).then((j) => {
              console.log(j)
              process.exit()
            })
          })
        })
      })
    })
  })
}
seedDB()