const itemModel = require('../models/item.model')

async function create(data){
    return await itemModel.create(data)
}

async function read(filter={}){
   return await itemModel.find({...filter,isActive : true})
}

async function readOne(filter){
   return await itemModel.findOne(filter)
}

async function update(filter,data){
    return await itemModel.updateOne(filter,data)
}

async function updateById(id,data){
    return await itemModel.updateOne({_id:id},data)
}

async function del(id){
    return await updateById(id,{isActive:false})
}


module.exports = {create,read,readOne,updateById,del}




