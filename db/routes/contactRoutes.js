const express = require("express");
const contactController = require("../controllers/contactController");
const router = express.Router();
const { getAllContacts, create, getByName, update, deleter } =
  contactController;
router
  .route("/contacts")
  .get(getAllContacts)
  .post(create)
  .patch(update)
  .delete(deleter);
router.route("/contacts/:name").get(getByName);

module.exports = router;
