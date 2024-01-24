const orderModel = require('../models/order.model')

async function create(data) {
   return await orderModel.create(data)
}

async function read(filter = {}, isPopItems = false) {
   return await orderModel.find({ ...filter, isActive: true })
}

async function readOne(filter) {
   return await orderModel
      .findOne(filter)
      .populate('userId')
      .populate('items.itemId')
}

module.exports = { create, read, readOne }

