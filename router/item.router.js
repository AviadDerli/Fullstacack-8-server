const express = require('express')
const router = express.Router()

// get all items
router.get('/item',async (req,res)=>{

    try{
        
    }
    catch(err){
        console.log(err);
    }


})

// get single item
router.get('/item/:id',function(req,res){})

router.post('/item',(req,res)=>{}) 

router.delete('/item/:id',(req,res)=>{}) 
router.put('/item/:id',(req,res)=>{}) 

module.exports = router