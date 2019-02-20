const router = require('express').Router();
const centerController = require('../../controllers/centerController');

router.route('/')
    .get(centerController.findAll)
    .post(centerController.create);

router
    .route('/:id')
    .get(centerController.findById)
    .put(centerController.update)
    .delete(centerController.remove);

module.exports = router;
