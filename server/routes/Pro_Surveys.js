const express = require("express");
const pro_surveys = express.Router();
const { Pro, Pro_Survey } = require("../models");
const cors = require("cors");
pro_surveys.use(cors());

pro_surveys.get("/", (req, res) => {
  Pro_Survey.findAll()
    .then((pro_surveys) => {
      res.json(pro_surveys);
    })
    .catch((err) => {
      console.error(err);
    });
});

pro_surveys.post("/", (req, res) => {
  Pro_Survey.create({
    text: req.body.text,
    checked: req.body.checked,
  })
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      console.error(err);
    });
});

pro_surveys.get("/:id", (req, res) => {
  Pro_Survey.findAll({
    include: {
      model: Pro,
      where: { id: req.params.id },
    },
  })
    .then((pro_surveys) => {
      res.json(pro_surveys);
    })
    .catch((err) => {
      console.error(err);
    });
});

pro_surveys.patch("/:id", (req, res) => {
  Pro_Survey.update(
    {
      title: req.body.title,
      content: req.body.content,
    },
    { where: { id: req.params.id } }
  )
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
    });
});

pro_surveys.delete("/:id", (req, res) => {
  Pro_Survey.destroy({ where: { id: req.params.id } })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
    });
});

module.exports = pro_surveys;
