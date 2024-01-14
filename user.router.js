const express = require('express')
const router = express.Router()
const userService = require('./user.service')


// localhost:2500/user

// get all users
router.get('/', (req, res) => {
    res.send(userService.getAllUsers())
})
// get single user
router.get('/:userId', (req, res) => {

    let user = userService.getUser(req.params.userId)
    if (user) res.send(user)

    res.status(400).send("user is not exist")

    // res.sendStatus(400)
})


router.post('/', (req, res) => { 
    console.log(req.body.firstName);
    res.sendStatus(275)

})

router.delete('/:id', (req, res) => {
    let pos = users.findIndex(u => u.id == req.params.id)
    if(pos==-1) res.sendStatus(404)

    delete users[pos] // 10
    res.send("delete")
})

router.put('/:id', (req, res) => { })

module.exports = router