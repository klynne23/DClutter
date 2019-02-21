const router = require("express").Router();
const centerController = require("../../controllers/centerController");

// Should match with "/api/centers"
router.route("/")
  .get(centerController.findAll)
  .post(centerController.create);

// Should match with "/api/centers/:id"
router
  .route("/:id")
  .get(centerController.findById)
  .put(centerController.update)
  .delete(centerController.remove);

module.exports = router;
