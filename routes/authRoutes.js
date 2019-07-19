const errHandler = require("../config/errHandler");

module.exports = function (app, passport) {
    //POST routes for login and signup
    app.post("/login", function (req, res, next) {
        if (!req.isAuthenticated()) {
            console.log("passing onto strategy");
            return next();
        } else {
            console.log("session is already logged in as: " + req.user);
            return res.sendStatus(200);
        }
    }, passport.authenticate("local-login"),
        function (req, res) {
            if (req.user) {
                res.json(req.user);
            }
            else {
                res.sendStatus(401);
            }
        }
    );
    app.post("/signup", passport.authenticate("local-signup", {
        successRedirect: "/",
        failureRedirect: "/",
        failureFlash: true
    }));
    app.get("/logout", function (req, res) {
        // req.logOut();
        req.session.destroy(function (err) {
            if (!err) {
                res.redirect("/");
            } else {
                errHandler.handle(err);
            }
        });
    });
};