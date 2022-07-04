//each resume holds many sections (ie work history)
//  each section has conditions, a title, and a list of sub sections (ie Software Engineer at Google)
//      each subsection has conditions, a title, a date range, and a list of line items (ie bullet points 'Utilized JavaScript...')
//          each line (bullet point) has a priority and a string as content.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const resumeSchema = new Schema({
  sections: [sectionSchema],
});

const sectionSchema = new Schema({
  cond: conditionSchema,
  title: {
    type: String,
    required: true,
    min: [3, 'Section header too short. Min 3.'],
    max: [20, 'Section header too long. Max 20.'],
  },
  subsections: [subSectionSchema],
});

const conditionSchema = new Schema({
  priority: { type: Number, required: true, default: 0, min: 0, max: 2 },
  style: { type: String, required: true, default: 'bullet' },
  minItems: { type: Number, required: true, default: 2, min: 0, max: 10 },
  maxItems: { type: Number, required: true, default: 5, min: 0, max: 10 },
});

const subSectionSchema = new Schema({
  cond: conditionSchema,
  title: {
    type: String,
    required: true,
    min: [3, 'SubSection header too short. Min 3.'],
    max: [40, 'SubSection header too long. Max 40.'],
  },
  dateStart: { type: Date, required: false },
  dateEnd: { type: Date, required: false },
  lines: [lineSchema],
});

const lineSchema = new Schema({
  priority: { type: Number, required: true, default: 0, min: 0, max: 2 },
  body: {
    type: String,
    required: true,
    min: [5, 'Line must be at least 5 characters.'],
    max: [80, 'Line cannot exceed 80 characters.'],
  },
});

module.exports = mongoose.model('Resume', resumeSchema);
