const express = require("express");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});