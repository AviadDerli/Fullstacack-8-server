// {
//     orderDate: Date,
//     userId: MongoId(ref to "user"),
//     items: [{
//             itemId: MongoId(ref to "item"),
//             price: Number,
//             amount: Number
//             }],
//     total: Number
// }

const user = {
    fName: String,
    lName: String,
    email: String,
    password: String,
    permission: "user" | "admin",
    orders: [MongoId("orders")],
    createdDate: Date,
    isActive: Boolean
}