const apiRouter = require("express").Router();

apiRouter.get("/", () => {
    console.log("routes");
})

module.exports = apiRouter;