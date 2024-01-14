const express = require('express')
const cors = require('cors')
const userRouter = require('./user.router')
const itemRouter = require('./item.router')

const app = express()

app.use(express.json())
app.use(cors())

app.use('/user',userRouter)
app.use('/item',itemRouter)

app.listen(2500,()=>{
    console.log('listening on port 2500');
})
