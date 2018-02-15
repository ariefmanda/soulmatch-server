const Gallery = require('../models/gallery')

let createGallery = (req, res) => {
    let objNewGallery = {
        userId: req.user._id,
        photo: req.body.photo
    }
    Gallery.create(objNewGallery)
    .then(data => {
        res.send({
            message: 'gallery created',
            data
        })
    })
    .catch(err => {
        res.status(404).send(err)
    })
}

let findGallery = (req, res) => {
    Gallery.findById(req.params.id)
    .then(data => {
        res.send({
            message: 'user gallery',
            data
        })
    })
    .catch(err => {
        res.status(404).send(err)
    })
}

let deleteGallery = (req, res) => {
    Gallery.remove({
        _id: req.params.id,
        userId: req.user._id
    })
    .then(data => {
        res.send({
            message: 'deleted',
            data
        })
    })
    .catch(err => {
        res.status(404).send(err)
    })
}

let updateGallery = (req, res) => {
    let objUpdateGallery = {
        userId: req.user._id,
        photo: req.body.photo
    }
    Gallery.findOneAndUpdate(req.params.id, objUpdateGallery)
    .then(data => {
        res.send({
            message: 'updated',
            data
        })
    })
    .catch(err => {
        res.status(404).send(err)
    })
}
module.exports = {

    createGallery,
    findGallery,
    deleteGallery,
    updateGallery

}