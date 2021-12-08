const express = require("express");
const contactController = require("../controllers/contactController");
const router = express.Router();
const { getAllContacts, create, getById, update, deleter } = contactController;
router
  .route("/contacts")
  .get(getAllContacts)
  .post(create)
  .patch(update)
  .delete(deleter);
router.route("/contacts/:id").get(getById);

module.exports = router;
