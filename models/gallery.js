const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let gallerySchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    photo: String
})

let Gallery = mongoose.model('gallery', gallerySchema)


module.exports = Gallery