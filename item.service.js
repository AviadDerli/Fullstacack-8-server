const itemController = require('./item.controller')
const db = require('./db')
db.connect()

async function readOne(bc){
    let item = await itemController.readOne({barcode:bc })
    if(!item.length) {

    }
}
async function updateItem(_id,data){
    let item = await itemController.readOne({_id})
    if(!item)throw 'item not found'
    const res = await itemController.updateOne({_id,data})
    if(!res) throw 'item das not update'
    return await itemController.readOne({_id})
}

async function getItemById(id){
    let item = await itemController.readOne({_id:id })
    if(!item.length) {

    }
}

async function getItemsByPrice(body){
    // {minPrice:'',maxPrice:''}
    let item = await itemController.read(body)
    if(!item.length) {

    }
}

async function getItemById(id){
    let item = await itemController.readOne({_id:id })
    if(!item.length) {

    }
}

