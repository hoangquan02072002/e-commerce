const customerAuthController = require("../../controller/home/customerAuthController");
const router = require("express").Router();

router.post(
  "/customer/customer-register",
  customerAuthController.customer_register
);
router.post("/customer/customer-login", customerAuthController.customer_login);

module.exports = router;
