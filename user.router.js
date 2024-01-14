const express = require("express");
const userRouter = express.Router();
const userService = require("./user.service");

// localhost:2500/user

// get all users
userRouter.get("/", (req, res) => {
  res.send(userService.getAllUsers());
});
// get single user
userRouter.get("/:userId", (req, res) => {
  let user = userService.getUser(req.params.userId);
  if (user) res.send(user);

  res.status(400).send("user is not exist");

  // res.sendStatus(400)
});

userRouter.post("/", (req, res) => {
  try{
    const user = userService.createUser(req.body)
    res.send(user);
  }
  catch(err){
    res.status(999).send(err);
  }
});

userRouter.delete("/:id", (req, res) => {
  try {
    res.send(userService.deleteUser(req.params.id));
  } catch (err) {
    res.status(999).send(err);
  }
});

userRouter.put("/", (req, res) => {
  try {
    const user = userService.update(req.body.userId, req.body.newData);
    res.send(user);
  } catch (err) {
    res.status(999).send(err);
  }
});

module.exports = userRouter;
