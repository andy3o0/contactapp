const express = require("express");
const router = express.Router();
const homeController = require("../controllers/homeController");

const { home } = homeController;
router.route("/").get(home);

module.exports = router;
