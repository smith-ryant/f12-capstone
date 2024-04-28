require("dotenv").config();
const Sequelize = require("sequelize");

// Set up the database connection
const sequelize = new Sequelize(process.env.DATABASE_URL);

const getAllAirplanesQuery = "SELECT * FROM airplanes;";

const getAirplaneQuery = "SELECT * FROM airplanes WHERE nNumber = ?;";

module.exports = {
  getAllAirplanes: async (req, res) => {
    try {
      const [results, metadata] = await sequelize.query(getAllAirplanesQuery);

      res.status(200).send(results);
    } catch (error) {
      console.error("Error getting airplanes:", error);
      res
        .status(500)
        .send({ message: "Error fetching airplanes", error: error.message });
    }
  },

  createAirplane: async (req, res) => {
    const { nNumber, year, make, model, price, imgURL } = req.body;
    const insertQuery = `
      INSERT INTO airplanes
      (nNumber, airplaneyear, airplanemake, airplanemodel, airplaneprice, airplaneimageurl)
      VALUES (?, ?, ?, ?, ?, ?);
    `;

    sequelize
      .query(insertQuery, {
        replacements: [nNumber, year, make, model, price, imgURL],
        type: Sequelize.QueryTypes.INSERT,
      })
      .then(async () => {
        try {
          const [results, metadata] = await sequelize.query(
            getAllAirplanesQuery
          );
          console.log(results);
          res.status(201).send(results);
        } catch (error) {
          console.error("Error creating airplane:", error);
          res.status(500).send({
            message: "Error creating new airplane",
            error: error.message,
          });
        }
      });
  },

  deleteAirplane: async (req, res) => {
    const { id } = req.params;
    const deleteQuery = `DELETE FROM airplanes WHERE id = ?;`;

    sequelize
      .query(deleteQuery, {
        replacements: [id],
        type: Sequelize.QueryTypes.DELETE,
      })
      .then(async () => {
        try {
          const [results, metadata] = await sequelize.query(
            getAllAirplanesQuery
          );
          res.status(200).send(results);
        } catch (error) {
          console.error("Error deleting airplane:", error);
          res.status(500).send({
            message: "Error deleting airplane",
            error: error.message,
          });
        }
      });
  },
  getAirplane: async (req, res) => {
    const { nNumber } = req.params;
    const [results, metadata] = await sequelize.query(getAirplaneQuery, {
      replacements: [nNumber],
      type: Sequelize.QueryTypes.SELECT,
    });
    if (results) {
      res.status(200).send(results);
    } else {
      res.status(404).send("Airplane not found");
    }
  },
};
