const express = require("express");
const database = require("./database");
const contactRoutes = require("./routes/contactRoutes");
const homeRoute = require("./routes/homeRoute");
const config = require("./config");
var cors = require("cors");
const app = express();
app.use(cors());

// parse requests of content-type: application/json
app.use(express.json());
app.use(contactRoutes);
app.use(homeRoute);

app.listen(config.port || 3001, () => {
  console.log(`Express is running on port ${config.port}`);
});
