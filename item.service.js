let { items } = require("./item.data");

function getAllItems() {
  let notEmptyItems = items.filter((item) => Boolean(item));
  return notEmptyItems;
}

function getItem(itemId) {
  return items.find((item) => item.id == itemId);
}
function getCategories(category) {
  return items.filter((item) => item.category == category);
}

const deleteItem = (itemId) => {
  const item = items.findIndex((item) => item.id == itemId);
  if (item === -1) throw "item not found";
  delete items[item];
  return "ok";
};

const update = (itemId, data) => {
  if (
    Object.keys(data).filter(
      (key) =>
        !(
          key === "id" ||
          key === "name" ||
          key === "color" ||
          key === "emoji" ||
          key === "price" ||
          key === "category" ||
          key === "image"
        )
    ).length > 0
  )
    throw "key did not exist";
  const item = items.findIndex((item) => item.id == itemId);
  if (item === -1) throw "item not found";
  items[item] = { ...items[item], ...data };
  return items[item];
};

const createItem = (data) => {
  if (Object.keys(data).length !== 6) throw "missing data";
  if (
    Object.keys(data).filter(
      (key) =>
        !(
          key === "name" ||
          key === "color" ||
          key === "emoji" ||
          key === "price" ||
          key === "category" ||
          key === "image"
        )
    ).length > 0
  )
    throw "key did not exist";
  if (
    items.find(
      (item) => item.category !== data.category && item.name !== data.name
    )
  )
    throw "item already exists";
  const newItem = { ...data, id: generateId() };
  items.push(newUser);
  return newUser;
};

function generateId(name) {
  return Date.now() + Math.floor(Math.random() * 10000000000);
}

module.exports = { getAllItems, getItem, deleteItem, update, createItem,getCategories };
