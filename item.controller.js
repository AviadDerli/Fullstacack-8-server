const itemModel = require('./item.model')
const db = require('./db')
db.connect()

async function create(data){
    return await itemModel.create(data)
}

async function read(filter={}){
   const res=  await itemModel.find(filter)//={image:{$regex:/\.png$/}}
   console.log(res);
   return res
}
async function readOne(filter){
   return await itemModel.findOne(filter)
}

async function updateOne(filter,newData){
   let res = await itemModel.updateOne(filter,newData)
   console.log(res);
   return res
}
async function updateMany(filter,newData){
   let res = await itemModel.updateMany(filter,newData)
   console.log(res);
   return res
}

async function del(_id){
  return await itemModel.deleteOne({_id})
}
module.exports = {create,read,readOne,updateOne,updateMany,del}






