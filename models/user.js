const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
    name: String,
    age: Number,
    password: String,
    profpict: String,
    gender: String,
    handphone: {
        type: Number,
        //unique: true
    },
    height: Number,
    weight: Number
})

let User = mongoose.model('users', userSchema)


module.exports = User