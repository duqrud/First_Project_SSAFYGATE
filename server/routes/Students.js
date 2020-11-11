const express = require("express");
const students = express.Router();
const { Student, Region } = require("../models");
// const Sequelize = require("sequelize");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
});

const cors = require("cors");
students.use(cors());

students.get("/", (req, res) => {
  Region.findAll()
    .then((regions) => {
      res.json(regions);
    })
    .catch((err) => {
      console.error(err);
    });
});

students.post("/", upload.single("profile_img"), (req, res) => {
  console.log(req.file);
  Student.create({
    name: req.body.name,
    class: req.body.class,
    profile_img: req.file.path,
    region_id: req.body.region_id,
  })
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      console.error(err);
    });
});

students.get(`/:region/:class`, (req, res) => {
  Region.findAll({
    where: {
      name: decodeURIComponent(req.params.region),
    },
    include: {
      model: Student,
      as: "students",
      where: { class: req.params.class },
    },
  })
    .then((students) => {
      res.json(students);
    })
    .catch((err) => {
      console.error(err);
    });
});

// students.get("/:name", (req, res) => {
//   Student.findOne({
//     where: { name: req.params.name },
//   })
//     .then((student) => {
//       res.json(student);
//     })
//     .catch((err) => {
//       console.error(err);
//     });
// });

module.exports = students;
