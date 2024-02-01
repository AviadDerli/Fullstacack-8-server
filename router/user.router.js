const express = require('express')
const router = express.Router()
const userService = require('../services/user.service')
const auth = require('../middleware/auth')

// localhost:2500/user

// get all users
router.get('/', async (req, res) => {
    res.send(userService.getAllUsers())
})
// get single user
router.get('/:userId', (req, res) => {

    let user = userService.getUser(req.params.userId)
    if (user) res.send(user)

    res.status(400).send("user is not exist")

    // res.sendStatus(400)
})


router.post('/login', async (req, res) => {
    res.send(await auth.generate())
})


router.post('/', auth.validate, async (req, res) => {
    try {
        res.send("🥩🥩🥩🥩🥩🥩")
        // await userService.addNewUser(req.body)
    }
    catch (err) {
        console.log(err.message);
        res.status(400).send({ msg: err.message, code: err.code ?? 400 })
    }
})

router.post('/edit',auth.validate, auth.validateAdmin, async (req, res) => {
    try {
        res.send("🥩🥩🥩🥩🥩🥩")
        // await userService.addNewUser(req.body)
    }
    catch (err) {
        console.log(err.message);
        res.status(400).send({ msg: err.message, code: err.code ?? 400 })
    }
})

router.delete('/:id', (req, res) => {
    let pos = users.findIndex(u => u.id == req.params.id)
    if (pos == -1) res.sendStatus(404)

    delete users[pos] // 10
    res.send("delete")
})

router.put('/:id', (req, res) => { })

module.exports = router

function Err(code, msg) {
    return { code, message: msg, func: "x()" }
}