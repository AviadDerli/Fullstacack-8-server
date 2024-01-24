const mongoose = require('mongoose')
require('./item.model')
require('./user.model')

const orderSchema = new mongoose.Schema({
    orderDate: {
        type: Date,
        default: Date.now
    },
    userId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "user",
        required: true
    },
    items: [{
        itemId: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: "item",
            required: true
        },
        price: {
            type: Number
        },
        amount: {
            type: Number
        }
    }],
    total: {
        type: Number,
    },
})
const orderModel = mongoose.model('order', orderSchema)
module.exports = orderModel;


const starter = async () => {
    const db = require('../db')
    await db.connect()

    let order = await 
    orderModel
    .findOne({_id:"65b0dddbb99aaf3669a0db16"})
    .populate('userId', "email fName lName")
    .populate('items.itemId')

   console.log(order.items);
}
starter()



// ********** manual - find items & user *****************
// *******************************************************

// let order = await orderModel.findOne({_id:"65b0dddbb99aaf3669a0db16"})
    
// const userModel = require('./user.model')
// const user = await userModel.findOne({_id:order.userId})

// const itemModel = require('./item.model')
// order.items.forEach(async it=>{
//     const item = await itemModel.findOne({_id:it.itemId})
//     console.log(item);

// })

// console.log(user);



// new order
    // let newOrder = {
    //     userId: "65afda92031702a7e64dabc3",
    //     items: [{
    //         itemId: "65a7d3ec1a89c6edce167955",
    //         price: 1.89,
    //         amount: 5
    //     }, {
    //         itemId: "65a7d3ec1a89c6edce167960",
    //         price: 5,
    //         amount: 3
    //     }, {
    //         itemId: "65a7d3ec1a89c6edce16796f",
    //         price: 2,
    //         amount: 1
    //     }],
    //     total : 26.45
    // }

    // let res = await orderModel.create(newOrder)