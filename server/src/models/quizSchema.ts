import { type } from "os";

const mongoose = require('mongoose');

const { Schema, ObjectId } = mongoose;

const quizSchema = new Schema({
  question : { type : String},
  correctAnswer : { type : String },
  options : { type : Array }
});

const Quiz = mongoose.model('Quiz', quizSchema);
 
export {
    Quiz
}