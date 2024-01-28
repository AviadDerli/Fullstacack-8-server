const express = require("express");
const router = express.Router();
const orderService = require("../services/order.service");

router.get("/:orderId", async (req, res) => {
  try {
    const order = await orderService.getOrder(req.params.orderId);
    if (!order) throw "Order not found";
    res.send(order);
  } catch (err) {
    res.status(404).send(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const results = await orderService.addNewOrder(req.body);
    res.send(results);
  } catch (error) {
    res.status(404).send(err);
  }
});
module.exports = router;
