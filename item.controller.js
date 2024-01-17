const itemModel = require('./item.model')


async function create(data){
    return await itemModel.create(data)
}

async function read(filter){
   return await itemModel.find(filter)
}
async function readOne(filter){
   return await itemModel.findOne(filter)
}

async function update(){}
async function del(){}


module.exports = {create,read,readOne,update,del}






