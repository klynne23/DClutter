const db = require('../models');

module.exports = {
    // Create a new center
    create: function (req, res) {
        db.Center
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    // Return all centers
    findAll: function (req, res) {
        db.Center
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    // Return centers that meet any of the search criteria
    findByCategories: function (req, res) {
        db.Center
            .find({accepts: {$in: req.params.categories.split(",")}})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    // Return a single center by id
    findById: function (req, res) {
        db.Center
            .find({_id: req.params.id})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },

    // Update a center (for verification button)
    update: function (req, res) {
        console.log(req.body)
        db.Center
            .findOneAndUpdate({_id: req.params.id}, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
};
