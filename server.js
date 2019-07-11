const express = require("express");
require("dotenv").config();
const routes = require("./routes/api");
const mongoose = require("mongoose");

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

// connect to mongoose DB
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/maintenancemanager",
    { useNewUrlParser: true }
  );

app.listen(PORT, () => {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});