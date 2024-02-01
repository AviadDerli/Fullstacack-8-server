const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET
// יצירת טוקן - רק בעת התחברות, לאחר אימות סיסמא במסד נתונים
async function generate(user = {}) {
    user = {
        email: "bla@bla.com",
        permission: "user"
    }

    let token = jwt.sign(user, SECRET, { expiresIn: "10m" })
    return token
}

// האם מבצע הפעולה רשום במערכת - יש לו טוקן תקף
async function validate(req, res, next) {
    let token = req.headers.authorization.split("Bearer ")[1]
    try {
        let user = jwt.verify(token, SECRET)
        req.body.user = user
        next()
    }
    catch {
        res.sendStatus(401)
    }
}

// האם מבצע הפעולה בעל טוקן + הרשאות מתאימות
async function validateAdmin(req, res, next) {
    if (req.body?.user.permission == "admin") { next() }
    else { res.sendStatus(401) }
}


module.exports = { generate, validate, validateAdmin }