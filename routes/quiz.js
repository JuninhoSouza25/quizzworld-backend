const router = require("express").Router();

const quizController = require("../controllers/quizController");

router
  .route("/quizies")
  .post((req,res) => quizController.create(req,res));

router.route("/quizies").get((req, res) => quizController.getAll(req, res));

router.route("/quiz/:id").get((req, res) => quizController.get(req, res));

router.route("/quiz/:id").delete((req, res) => quizController.delete(req, res));

router.route("/quiz/:id").put((req, res) => quizController.update(req, res));

module.exports = router;