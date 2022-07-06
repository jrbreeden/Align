const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const appliedJobsSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    appliedJobList:[jobDetails]
  },
  { timestamps: true }
);

const jobDetails = new Schema({
  position: { type: String, required: true },
  job_link: { type: String, required: true },
  resume_link: { type: String, required: true },
  job_date_posted: { type: Date, required: true },
  date_applied: { type: Date, required: false, default:null},
})

module.exports = mongoose.model('AppliedJobs', appliedJobsSchema);
