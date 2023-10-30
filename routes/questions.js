const router = require("express").Router();

const questionController = require("../controllers/questionController");

router
  .route("/questions")
  .post((req,res) => questionController.create(req,res));

router.route("/questions").get((req, res) => questionController.getAll(req, res));

router.route("/question/:id").get((req, res) => questionController.get(req, res));

router.route("/question/:id").delete((req, res) => questionController.delete(req, res));

router.route("/question/:id").put((req, res) => questionController.update(req, res));

module.exports = router;