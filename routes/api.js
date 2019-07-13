const apiRouter = require("express").Router();
const tasksController = require("../controllers/tasksController");

router
  .route("/api/tasks")
  .get(tasksController.findAll)
  .post(tasksController.create);

router
  .route("api/tasks/:id")
  .get(tasksController.findById)
  .put(tasksController.update)
  .delete(tasksController.remove);

module.exports = apiRouter;