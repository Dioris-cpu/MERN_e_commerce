import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

// @description      Create all products
// @route            POST /api/products
// @access           Public

const addOrderItems = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error("No oreder items");
    return;
  } else {
    const order = new order({
      orderItems,
      user: req.user._id,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    });
    const createdOrder = await order.save()

    res.status(201).json(createdOrder)
  }
});

export {addOrderItems}