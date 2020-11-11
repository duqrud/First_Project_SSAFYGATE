const express = require("express");
const router = express.Router();
const db = require("../dbconnection");

/* GET home page. */
router.get("/getData", (req, res) => {
  db.query("select * from `pro`", (err, rows) => {
    if (!err) {
      res.send(rows);
    } else {
      console.log(`query error : ${err}`);
      res.send(err);
    }
  });
});

module.exports = router;
