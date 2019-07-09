const router = require("express").Router();

router.get("/", () => {
    console.log("routes");
})

module.exports = router;