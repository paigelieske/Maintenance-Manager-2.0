const express = require("express");
require("dotenv").config();
const apiRoutes = require("./routes/api");
const email = require("./routes/email");
const mongoose = require("mongoose");
const db = require("./models");

// passport packages
const passport = require("passport");
const session = require("express-session");
const flash = require("express-flash");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
;}

//passport, session, and flash middleware for authentication, persistent login, and error-handling
app.use(session({ secret: process.env.secret || "temporary secret", resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use(apiRoutes);
app.use(email);

//import auth routes
require("./routes/authRoutes")(app, passport);
//import passport strategy
require("./config/passport")(passport, db.User);

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/maintenancemanager",
  { useNewUrlParser: true }
);

mongoose.set("useFindAndModify", false)

app.listen(PORT, () => {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});