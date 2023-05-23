module.exports = (sequelizeConnection, Sequelize) => {
  const Biodata = sequelizeConnection.define("biodata_db", {
    nama: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    tempatLahir: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    tglLahir: {
      type: Sequelize.DATEONLY,
    },
    alamat: {
      type: Sequelize.STRING,
    },
  });
  return Biodata;
};
