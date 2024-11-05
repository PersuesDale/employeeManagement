const { response } = require('express')
var RegisterSchema = require('../schema/RegisterSchema')
const multer = require('multer');
const LikeSchema = require('../schema/LikeSchema');

const storage = multer.diskStorage({
    destination: function (req, res, cb) {
        cb(null, "./assets");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});
const upload = multer({ storage: storage }).single("image");

const findAll = (req, res) => {

    RegisterSchema.find({ isActive: true })
        .then((response) => {
            res.json({ status: 200, msg: 'Data retrieval succesfull', data: response })
        })
        .catch((error) => {
            res.json({ status: 500, msg: "Data failed", data: error })
        })

}

const aDeleteFunction = (req, res) => {

    const id = req.params.id
    RegisterSchema.findByIdAndUpdate(id, { isActive: false }, { new: true })
        .then((response) => {
            res.json({ status: 200, msg: 'Data update succesfull', data: response })
        })
        .catch((error) => {
            res.json({ status: 500, msg: 'Data update failed', data: error })
        })

}

const likes = async (req, res) => {

    console.log(req.body)
    const likedata = new LikeSchema({ likingperson: req.body.likingperson, likedperson: req.body.likedperson })
    await likedata.save()
        .then((response) => {
            res.json({ status: 200, msg: 'You liked this person', data: response })
        })
        .catch((error) => {
            res.json({ status: 500, msg: 'We dont condone you liking this person', data: error })
        })

}

const viewLikes = (req, res) => {

    LikeSchema.find({}).populate('likingpersons likedpersons')
        .then((response) => {
            console.log(response)
            res.json({ status: 200, msg: 'data feteched', data: response })
        })
        .catch((error) => {
            res.json({ status: 500, msg: 'data failed', data: error })
        })

}

const findusingId = (req, res) => {

    const id = req.params.id
    console.log(req.params)

    RegisterSchema.findById(id)
        .then((response) => {
            console.log(response)
            res.json({ status: 200, msg: 'Data retrieval succesfull', data: response })
        })
        .catch((error) => {
            res.json({ status: 500, msg: "Data failed", data: error })
        })

}

const saveData = async (req, res) => {

    console.log(req.body)
    console.log(req.file)
    const userData = new RegisterSchema({ userid: req.body.userid, firstname: req.body.firstname, lastname: req.body.lastname, email: req.body.email, age: req.body.age, position: req.body.position, password: req.body.password, image: req.file });
    await userData.save()
        .then((response) => {
            res.json({ status: 200, msg: 'Data succesfully saved', data: response })
        })
        .catch((error) => {
            res.json({ status: 500, msg: 'Data failed to save', data: error })
        })

}

const userLogin = async (req, res) => {

    const { userid, password } = req.body
    console.log(req.body)
    const loginData = await RegisterSchema.findOne({ userid })
    console.log('logindata', loginData.password)
    console.log(loginData.email)

    if (loginData) {

        if (loginData.password == password) {
            return res.json({ status: 200, msg: 'Login Succesfull', id: loginData._id })
        }
        else {
            return res.json({ status: 404, msg: 'Login Failed' })
        }

    }
    else {

        return res.json({ status: 500, msg: 'User Not Found' })

    }

}

const findandupdate = (req, res) => {

    const id = req.params.id

    const { firstname, lastname, age, position } = req.body
    console.log(req.body)

    RegisterSchema.findByIdAndUpdate(id, { firstname, lastname, age, position }, { new: true })
        .then((response) => {

            res.json({ status: 200, msg: 'Update Successfull', data: response })

        })
        .catch((error) => {

            res.json({ status: 500, msg: 'Update Failed', data: error })

        })

}

module.exports = { findAll, saveData, userLogin, findusingId, findandupdate, aDeleteFunction, upload, likes, viewLikes }