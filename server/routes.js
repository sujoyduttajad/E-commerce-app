require("dotenv").config();
const express = require("express");
const products = require("./products.json");
const stripe = require("stripe")(process.env.STRIPE_API_SECRET);
const { validateCartItems } = require("use-shopping-cart/src/serverUtil");

module.exports = function getRoutes() {
  const router = express.Router();

  router.get("/products", getProducts);
  router.get("/products/:productId", getSingleProduct);

  router.post("/checkout-sessions", createCheckoutSession);

  return router;
};

// controlers
function getProducts(req, res) {
  res.status(200).json({ products });
}

function getSingleProduct(req, res) {
  const { productId } = req.params;
  const product = products.find((product) => product.id === productId);

  try {
    if (!product) {
      throw Error(`No product found for id: ${productId} `);
    }
    res.status(200).json({ product });
  } catch (err) {
    return res.status(404).json({ statusCode: 404, message: error.message });
  }
}

async function createCheckoutSession(req, res) {
  try {
    const cartItems = req.body;
    const line_items = validateCartItems(products, cartItems);

    const origin =
      process.env.NODE_ENV === "production"
        ? req.headers.origin
        : "http://localhost:3000";

    const params = {
      submit_type: "pay",
      payment_method_types: ["card"],
      billing_address_collection: "auto",
      // shipping_address_collection: {
      //   allowed_countries: ["US", "IN", ]
      // },
      line_items,
      success_url: `${origin}/result?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: origin,
      mode: "payment",
    };

    const checkoutSession = await stripe.checkout.sessions.create(params);

    res.status(200).json(checkoutSession);
  } catch (error) {
    res.status(500).json({ statusCode: 500, message: error.message });
  }
}
