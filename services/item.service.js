const itemController = require('../DL/controllers/item.controller')

async function getItemByBarcode(bc){

    let item = await itemController.readOne({barcode:bc })
    if(!item.length) {

    }

}

async function getItemById(id){

    let item = await itemController.readOne({_id:id })
    if(!item.length) {

    }

}