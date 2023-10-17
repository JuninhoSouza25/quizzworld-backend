const router = require("express").Router();

const roleController = require("../controllers/roleController");

router
  .route("/roles")
  .post((req,res) => roleController.create(req,res));

router.route("/roles").get((req, res) => roleController.getAll(req, res));

router.route("/roles/:id").get((req, res) => roleController.get(req, res));

router.route("/roles/:id").delete((req, res) => roleController.delete(req, res));

module.exports = router;