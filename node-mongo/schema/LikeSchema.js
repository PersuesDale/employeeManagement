const mongoose = require('mongoose')

const LikeSchema = mongoose.Schema({

    likingpersons: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Likingperson",
    },
    likedpersons: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Likedperson",
    }

})

module.exports = mongoose.model('like', LikeSchema)