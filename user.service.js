let { users } = require('./user.data')


function getAllUsers(){
    let notEmptyUsers = users.filter(u=>Boolean(u))
    return notEmptyUsers;
}
function getUser(userId){
    return users.find(u=>u.id==userId)
}

function generateId(){
    return 832762
}


module.exports = {getAllUsers, getUser}