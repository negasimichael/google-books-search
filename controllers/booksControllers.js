const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    console.log('Nick')
    db.GoogleBooks
      .find({})
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(200).json(err));
  },
  findOne: function (req, res) {
    db.GoogleBooks
      .findOne({ id: req.params.id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(200).json(err));
  },
  save: function (req, res) {
    db.GoogleBooks
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(200).json(err));
  },
  remove: function (req, res) {
    db.GoogleBooks
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(200).json(err));
  }
};