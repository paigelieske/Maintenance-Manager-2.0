const authRouter = require("express").Router();
const userController = require("../controllers/userController");

authRouter.route("/user")
    .post(userController.create);

module.exports = authRouter;