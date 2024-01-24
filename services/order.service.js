const orderController = require('../DL/controllers/order.controller')

  let data = {
        userId: "65afda92031702a7e64dabc3",
        items : {
            "65a7d3ec1a89c6edce167955" : 5,
            "65a7d3ec1a89c6edce167960" : 3,
            "65a7d3ec1a89c6edce16796f" : 1,
        }
    }

async function addNewOrder(dataX) {
    // ממי הוא מקבל >>>> מה הוא מקבל



    // בדיקות
    
    // - האם יוזר קיים
    let user = await orderController.readOne({userId : data.userId})
    if(!user) throw {code : 404 , msg : "user is not exist" }
    
    let values = Object.values(data.items)
    // - האם יש מוצרים בהזמנה
    if(!data.items || !values.length) throw {code : 404 , msg : "items empty" }

    // - כמות > 0 
    if(values.some(v=>v<=0)) throw {code : 404 , msg : "value 0" }
    
    // מוצר קיים ?  
    // מחיר מוצר  

    //  חישוב הסה"כ

    // ממפה כל המידע לתצורת הסכמה 

    //  יצירת הזמנה ב-DB

    // לעדכן את רשימת ההזמנות בתוך היוזר במזהה של ההזדמנה חדשה


    // החזרת תשובה

}

async function getAllOrders() {
    let orders = await orderController.read()
    return orders

 }

async function getOrdersByUser(userId) {
    let result = await orderController.read({userId},true)

    return result;
 }

async function getOrder(orderId) {
    let result = await orderController.readOne({_id:orderId})

    return result;
 }

module.exports = { addNewOrder, getAllOrders, getOrdersByUser }