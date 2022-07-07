const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobDetails = new Schema({
  position: { type: String, required: true },
  company:{ type: String, required: true },
  logoUrl: { type: String, required: true },
  location: { type: String, required: true },
  jobType: { type: String, required: true },
  job_link: { type: String, required: true },
  resume_link: { type: String, required: true },
  job_date_posted: { type: Date, required: true },
  date_applied: { type: Date, required: false, default:null},
})

const appliedJobsSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, required:true },
    appliedJobList: [jobDetails],
  },
  { timestamps: true }
);

module.exports = mongoose.model('AppliedJobs', appliedJobsSchema);
