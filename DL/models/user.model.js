// DL:
//  file : connection to db 
//  models - schema of "table/collection"
//  controllers  -  CRUD's function
// model == table/collection


const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    fName: {
        type: String,
        required: true
    },
    lName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        select : false
    },
    permission : {
        type:String,
        enum :["user","admin"],
        default : "user",
    },
    // ***** Option for save *****
    orders : [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "order",
    }],

    createdDate:{
        type:Date,
        default: Date.now
    },
    isActive: {
        type:Boolean,
        default : true
    }
})
const userModel = mongoose.model('user', userSchema)
module.exports = userModel;
