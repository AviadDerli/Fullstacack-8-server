const express = require("express");
const cors = require("cors");
const db = require("./DL/db");
// const userRouter = require("./router/user.router");
const orderRouter = require("./router/order.router");

const app = express();
db.connect();

app.use(cors());
app.use(express.json());

// app.use("/user", userRouter);
app.use("/order", orderRouter);

// const itemRouter = require('./item.router')
// app.use('/item',itemRouter)

app.listen(2500, () => console.log("**** Server is up ****"));
