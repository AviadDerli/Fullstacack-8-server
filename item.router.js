const express = require('express')
const itemRouter = express.Router()
const itemService= require('./item.service.js')

// get all items
itemRouter.get('/',function(req,res){
    try{
        res.send(itemService.getAllItems())
    }
    catch(err){
        res.status(401).send(err)
    }
})

// get single item
itemRouter.get('/:id',function(req,res){
    try{
        res.send(itemService.getItem(req.params.id))
    }
    catch(err){
        res.status(401).send(err)
    }
})
itemRouter.get('/:categories',function(req,res){
    try{
        res.send(itemService.getCategories(req.params.categories))
    }
    catch(err){
        res.status(401).send(err)
    }
})

itemRouter.post('/',(req,res)=>{
    try{
        res.send(itemService.createItem(req.body))
    }
    catch(err){
        res.status(401).send(err)
    }
}) 

itemRouter.delete('/:id',(req,res)=>{
    try{
        res.send(itemService.deleteItem(req.params.id))
    }
    catch(err){
        res.status(401).send(err)
    }
}) 
itemRouter.put('/:id',(req,res)=>{
    try{
        res.send(itemService.update(req.params.id,req.body))
    }
    catch(err){
        res.status(401).send(err)
    }
}) 

module.exports = itemRouter