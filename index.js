const express = require('express')
const app = express()
require('dotenv').config()

const db = require('./DL/db')
db.connect()

const cors = require('cors');
app.use(cors())
app.use(express.json())

const userRouter = require('./router/user.router')
app.use('/user',userRouter)

// const itemRouter = require('./item.router')
// app.use('/item',itemRouter)

app.listen(2500, () => console.log("**** Server is up ****"))
