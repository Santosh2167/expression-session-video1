const express = require("express");
const router = express.Router();
const pageController = require("./../controllers/page_controller");
const authenticationController = require("./../controllers/authentication_controller");


router.get("/", pageController.index);

router.get("/login",authenticationController.loginForm);

router.post("/login",authenticationController.loginVerify);

module.exports = router;