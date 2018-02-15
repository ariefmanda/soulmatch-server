const User    = require('../models/user')
const jwt     = require('jsonwebtoken')
const bcrypt  = require('bcryptjs')
// const salt = bcrypt.genSaltSync(10);
// const hash = bcrypt.hashSync("B4c0/\/", salt);


let createUser = (req, res) => {
    let objNewUser = {
        handphone : req.body.handphone,
        password  : bcrypt.hashSync(req.body.password)
    }
    //console.log(req.body)
    User.create(objNewUser)
    .then(data => {
        res.send({
            data
        })
    })
    .catch(err => {
        res.status(404).send(err)
    })
}

let updateUser = (req, res) => {
    let objUpdateUser = null

    if(req.body.password){
            objUpdateUser = {
            name      : req.body.name,
            age       : req.body.age,
            password  : bcrypt.hashSync(req.body.password),
            profpict  : req.file.cloudStoragePublicUrl,
            gender    : req.body.gender,
            height    : req.body.height,
            weight    : req.body.weight
        }
    } else {
        objUpdateUser = {
        name      : req.body.name,
        age       : req.body.age,
        profpict  : req.file.cloudStoragePublicUrl,
        gender    : req.body.gender,
        height    : req.body.height,
        weight    : req.body.weight
        }
    }
    User.findByIdAndUpdate(req.user._id, objUpdateUser)
    .then(data => {
        res.send({message: `Profile updated`,
            data})
    })
    .catch(err => {
        res.status(400).send(err)
    })
}

let findAllUser = (req, res) => {
    User.find({})
    .then(data => {
        res.send({
            message:`Cari siapa hayoo`,
            data
        })
    })
    .catch(err => {
        res.status(404).send(err)
    })
}

let findUser = (req, res) => {
    User.findById(req.params.id)
    .then(data => {
        res.send({message: `Cieee kepoin siapa??`,
        data})
    })
    .catch(err => {
        res.status(403).send(err)
    })
}


let login = (req, res) => {
    let jwtSecret = 'ibadwjfid'
    User.findOne({handphone: req.body.handphone})
    .then(data => {
        console.log(req.body)
        console.log('ini data', data)
        bcrypt.compare(req.body.password, data.password)
        .then(result => {
            console.log('ini result', result)
            res.send({
                token: jwt.sign({
                    _id: data.id,
                    handphone: req.body.handphone
                }, jwtSecret),
                message: 'token yeah!'
            })
        })
    })
    .catch(err => {
        res.status(401).send(err)
    })
}


let findMe = (req, res) => {
    console.log('ini apa lagi sihhhhhhhhh');
    console.log(req.user);
    console.log(req.user._id);
    User.findById(req.user._id)
    .then(data => {
        res.send({message:`sip`, 
        data})
    })
    .catch(err => {
        next(err)
    })
}

module.exports = {
    createUser,
    findAllUser,
    findUser,
    updateUser,
    login,
    findMe
}