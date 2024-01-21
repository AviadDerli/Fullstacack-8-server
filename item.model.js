// DL:
//  file : connection to db 
//  models - schema of "table/collection"
//  controllers  -  CRUD's function

// model == table/collection

// temp - זמני 


const mongoose = require('mongoose')
const itemSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    barcode: {
        type: String,
        unique: true,
        required: true
    },
    emoji: {
        type: String,
    },
    image: {
        type: String,
    },
    price: {
        type: Number,
    },
    sale:{type: String}
})
const itemModel = mongoose.model('item', itemSchema)
module.exports = itemModel;
