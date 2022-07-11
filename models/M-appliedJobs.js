const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobDetails = new Schema({
  position: { type: String },
  company:{ type: String },
  logoUrl: { type: String },
  location: { type: String },
  jobType: { type: String },
  job_link: { type: String },
  resume_link: { type: String, required: false },
  job_date_posted: { type: Date },
  date_applied: { type: Date, required: false, default:null},
  tags:[{type:String , required:true , default:''}]
})

const appliedJobsSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, required:true },
    appliedJobList: [{type:jobDetails , required:false}],
  },
  { timestamps: true }
);

module.exports = mongoose.model('AppliedJobs', appliedJobsSchema);
