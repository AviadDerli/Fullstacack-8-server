const userController = require('../DL/controllers/user.controller')

function getAllUsers() {
    let notEmptyUsers = users.filter(u => Boolean(u))
    return notEmptyUsers;
}
function getUser(userId) {
    return users.find(u => u.id == userId)
}




// let reqBody = {
//             "fName": "haim",
//             "lName": "levi",
//             "email": "haim_l@gmail.com",
//             "password": "32saw2",

//             "permission": "admin",
//             "key": "fetch('myUrlServer',{...localStorage})"
//         }

//         let result = await addNewUser(reqBody)


async function addNewUser(body) {
    body = {
        email :"sa@sad.com",
        password : "sad32x",
        permission : "admin",
        key : "fetch('url',{...localStorage})"
    }
    // validation fields

    let oldUser = await userController.readOne({ email: body.email })
    if(oldUser) throw {code : 7622 , message : "user is exist"}

    let myUser = {
        permission : "user",
        email : body.email,
        password : encryptPassword(body.password)

    }
    await userController.create(myUser)
    // email is not exist
    // create new user (db)
    // .
    // .
    // .
    // return newUser
}






function generateId() {
    return 832762
}


module.exports = { getAllUsers, getUser ,addNewUser}