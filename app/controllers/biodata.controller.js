const db = require("../models");

const Biodata = db.biodata;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  if (!req.body.nama) {
    res.status(400).send({
      message: "content cant be empty",
    });
    return;
  }

  const biodata = {
    nama: req.body.nama,
    tempatLahir: req.body.tempatLahir,
    tglLahir: req.body.tglLahir,
    alamat: req.body.alamat,
  };

  Biodata.create(biodata)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "error occured while inserting biodata" });
    });
};

exports.findAll = (req, res) => {
  Biodata.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "error while retrieving biodatas",
      });
    });
};

exports.findOne = (req, res) => {
  Biodata.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "error while retrieving biodata",
      });
    });
};
exports.delete = (req, res) => {
  Biodata.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(() => {
      res.send({
        message: `succes delete biodata with id = ${req.params.id} !`,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: `couldnt delete biodata with id = ${req.params.id}`,
      });
    });
};
