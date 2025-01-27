const mongoose = require("mongoose");
const validator = require("validator");


const studentSchema = new mongoose.Schema({
    name : {
        type : String, 
        required : true, 
        minlength : 2 
    },
    rollNo : {
        type : String, 
        required : true
    },
    semester : {
        type : Number, 
        required : true, 
    }, 
    branch : {
        type : String, 
        required : true, 
    },
    age : {
        type : Number, 
        required : true, 
    },
    gender : {
        type : String, 
        required : true, 
    }, 
    phone : {
        type : Number, 
        min : 10, 
        unique : true
    }, 
    email : {
        type : String, 
        required : true, 
        unique : true, 
        validate(value) {
            if(!validator.isEmail(value)) {
                throw new Error("Email is not valid");
            }
        }
    }
});


const Student = new mongoose.model("Student", studentSchema);

module.exports = Student;