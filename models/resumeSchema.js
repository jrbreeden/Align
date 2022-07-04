const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const resumeSchema = new Schema({
    personal: personalSchema,
    statement: {type:statementSchema, required:false},
    skills:{type:[{type:skillSchema , required:false , min:5 , max:20}], validate:[50 , 'Too many skills. Max 50']},
    projects:sectionSchema,
    workHistory:sectionSchema,
    education:sectionSchema,
})

const personalSchema = new Schema({
    name:{type:String , required:true , min:2 , max:30},
    email:{type:String , required: true},
    phone:{type:String , required:true},
    link1:{type:String , required:false},
    link2:{type:String , required:false},
    link3:{type:String , required:false}
})

const statementSchema = new Schema({
    title:{type:String, required:false , min:3, max:50},
    body:{type:String , required:false , min:[10,'Min char length is 10.'] , max:[300 , 'Max char length is 300.'] }
})

const skillSchema = new Schema({
    skill:{type:String , required:true , min:1 , max:[20,'Max skill chars of 20.']},
    priority:{type:Number, required:true , min:0,max:2, default:0}
})

const sectionSchema = new Schema({
    cond: conditionSchema,
    title:{type:String , required:true , min:[3, 'Section header too short. Min 3.'] , max:[20,'Section header too long. Max 20.']},
    subsections: [subSectionSchema],
})

const conditionSchema = new Schema({
    priority: {type:Number , required:true, default:0 , min:0 , max:2},
    minItems:{type:Number , required:true , default:2 , min:0 , max:10},
    maxItems:{type:Number , required:true , default: 5 , min:0 , max:10},
})

const subSectionSchema = new Schema({
    cond:conditionSchema,
    title:{type:String , required:true , min:[3, 'SubSection header too short. Min 3.'] , max:[40,'SubSection header too long. Max 40.']},
    dateStart:{type:Date, required:false },
    dateEnd:{type:Date, required:false},
    lines:[lineSchema]
})

const lineSchema = new Schema({
    priority:{type:Number , required:true, default:0 , min:0 , max:2},
    body:{type:String , required:true, min:[5 , 'Line must be at least 5 characters.'] , max:[80, 'Line cannot exceed 80 characters.']}
})

module.exports = mongoose.model('Resume' , resumeSchema)