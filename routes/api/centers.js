const router = require("express").Router();
const centerController = require("../../controllers/centerController");

// Should match with "/api/centers"
router.route("/")
  .get(centerController.findAll)
  .post(centerController.create);

// Should match with "/api/centers/categories"
router.route("/categories/:categories")
  .get(centerController.findByCategories);

// Should match with "/api/centers/:id"
router.route("/id/:id")
  .get(centerController.findById)
  .put(centerController.update)

module.exports = router;
