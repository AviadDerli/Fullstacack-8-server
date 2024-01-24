let { users } = require('./user.data')


function getAllUsers(){
    let notEmptyUsers = users.filter(u=>Boolean(u))
    return notEmptyUsers;
}
function getUser(userId){
    return users.find(u=>u.id==userId)
}






async function addNewUser(){
// validation fields
// email is not exist
// create new user (db)
// .
// .
// .
// return newUser
}






function generateId(){
    return 832762
}


module.exports = {getAllUsers, getUser}