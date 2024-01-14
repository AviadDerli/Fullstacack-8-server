let { users } = require("./user.data");

function getAllUsers() {
  let notEmptyUsers = users.filter((u) => Boolean(u));
  return notEmptyUsers;
}
function getUser(userId) {
  return users.find((u) => u.id == userId);
}

const deleteUser = (userId) => {
  const user = users.findIndex((u) => u.id == userId);
  if (user === -1) throw "user not found";
  delete users[user];
  return "ok";
};

const update = (userId, data) => {
  if (
    Object.keys(data).filter(
      (key) =>
        !(
          key === "id" ||
          key === "dateOfBirth" ||
          key === "email" ||
          key === "lastName" ||
          key === "firstName"
        )
    ).length > 0
  )
    throw "key did not exist";
  const user = users.findIndex((u) => u.id == userId);
  if (user === -1) throw "user not found";
  users[user] = { ...users[user], ...data };
  return users[user];
};

const createUser = (data) => {
  if (Object.keys(data).length !== 4) throw "missing data";
  if (
    Object.keys(data).filter(
      (key) =>
        !(
          key === "dateOfBirth" ||
          key === "email" ||
          key === "lastName" ||
          key === "firstName"
        )
    ).length > 0
  )
    throw "key did not exist";
  if (users.find((u) => u.email === data.email)) throw "user already exists";
  const newUser = { ...data, id: generateId(data.email) };
  users.push(newUser);
  return newUser;
};

function generateId(email) {
  return email + 832762;
}

module.exports = { createUser,getAllUsers, getUser, deleteUser, update };
