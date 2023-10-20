const router = require("express").Router();

const themeController = require("../controllers/themeController");

router
  .route("/themes")
  .post((req,res) => themeController.create(req,res));

router.route("/themes").get((req, res) => themeController.getAll(req, res));

router.route("/theme/:id").get((req, res) => themeController.get(req, res));

router.route("/theme/:id").delete((req, res) => themeController.delete(req, res));

router.route("/theme/:id").put((req, res) => themeController.update(req, res));




module.exports = router;