const express = require("express");
const cors = require("cors");

const app = express();

const corsOptions = {
  origin: "http://localhost:5000",
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

const db = require("./app/models");
db.sequelizeConnection
  .sync()
  .then(() => {
    console.log("synced db");
  })
  .catch((err) => {
    console.log(`failed to sync ${err.message}`);
  });

const biodataController = require("./app/controllers/biodata.controller.js");
app.post("/", (req, res) => {
  biodataController.create(req, res);
});

app.get("/", (req, res) => {
  biodataController.findAll(req, res);
});

app.get("/:id", (req, res) => {
  biodataController.findOne(req, res);
});

app.post("/:id", (req, res) => {
  biodataController.delete(req, res);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
