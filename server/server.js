const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const port = process.env.PORT || 5000;

app.use(express.static("uploads"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(express.static(path.join(__dirname, "..", "public/")));

const User = require("./routes/User");
const Article = require("./routes/Articles");
const Student = require("./routes/Students");
const Pro_Survey = require("./routes/Pro_Surveys");

app.use("/users", User);
app.use("/articles", Article);
app.use("/students", Student);
app.use("/pro_surveys", Pro_Survey);

app.listen(port, () => console.log(`Listening on port ${port}`));
