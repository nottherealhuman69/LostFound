const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name:{type: String, required:true},
    email:{type: String, required: true},
    password:{type:String, required: true},
    pic:{
        type:String,
        required: true,
        default:
            "https://www.google.com/imgres?q=mahindra%20university%20symbol&imgurl=https%3A%2F%2Fthelearningproject.allegiance-educare.in%2Fstorage%2Fuploads%2Fcolleges%2Fthumb%2F150_150_1610353614Screenshot20210111134729.png&imgrefurl=https%3A%2F%2Fthelearningproject.allegiance-educare.in%2Fcollege%2Fmahindra-university&docid=8mF1ZHis80EN6M&tbnid=vNoIMpM6_EHakM&vet=12ahUKEwiHsamDpNaJAxWcS2wGHcqAJL4QM3oECCwQAA..i&w=150&h=150&hcb=2&ved=2ahUKEwiHsamDpNaJAxWcS2wGHcqAJL4QM3oECCwQAA"
    },
},
{
    timestamps: true,
})

const User = mongoose.model("User", userSchema);
module.exports = User;