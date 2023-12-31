const mongoose = require('mongoose');

const db = require('../config/db');
const userModel = require('./user.model')
const { Schema } = mongoose;

const urlSubmitionSchema = new Schema({
    userId:{
  type: Schema.Types.ObjectId,
  ref: userModel.modelName
    },
    longUrl:{
        type:String
    },
    shorturl:{
        type:String
    }
})


const urlSubmitionModel = db.model('urlSubmition',urlSubmitionSchema);

module.exports = urlSubmitionModel;