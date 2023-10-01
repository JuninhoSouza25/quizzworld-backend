const router = require("express").Router();

const levelController = require("../controllers/levelController");

router
  .route("/levels")
  .post((req,res) => levelController.create(req, res));

router.route("/levels").get((req, res) => levelController.getAll(req, res));

router.route("/levels/:id").get((req, res) => levelController.get(req, res));

router.route("/levels/:id").delete((req, res) => levelController.delete(req, res));

router.route("/levels/:id").put((req, res) => levelController.update(req, res));


module.exports = router;