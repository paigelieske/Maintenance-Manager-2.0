const apiRouter = require("express").Router();
const tasksController = require("../controllers/tasksController");

apiRouter
  .route("/api/tasks")
  .get(tasksController.findAll)
  .post(tasksController.create);

apiRouter
  .route("/api/tasks/:id")
  .get(tasksController.findById)
  .put(tasksController.update)
  .delete(tasksController.remove);

module.exports = apiRouter;