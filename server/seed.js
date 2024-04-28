require("dotenv").config();
const Sequelize = require("sequelize");
const express = require("express");

// Set up database connection using Sequelize
const sequelize = new Sequelize(process.env.DATABASE_URL);

const app = express();

// SQL statements for dropping and creating the table, and for inserting data
const dropTableSQL = `DROP TABLE IF EXISTS airplanes;`;
const createTableSQL = `
  CREATE TABLE airplanes (
    id SERIAL PRIMARY KEY,
    nNumber VARCHAR(50),
    airplaneYear INT,
    airplaneMake VARCHAR(50),
    airplaneModel VARCHAR(50),
    airplanePrice INT,
    airplaneImageURL VARCHAR(50)
  );
`;

const insertDataSQL = `
  INSERT INTO airplanes (
    nNumber, airplaneYear, airplaneMake, airplaneModel, airplanePrice, airplaneImageURL
  ) VALUES 
    ('N25GR', 1996, 'Beechcraft', 'C90B King Air', 2395000, './resources/N25GR.jpeg'),
    ('N128JP', 1979, 'Beechcraft', 'C90F King Air', 1195000, './resources/N128JP.jpeg'),
    ('N26EM', 2019, 'Piper', 'M600', 1750000, './resources/N26EM.webp'),
    ('N509JJ', 2022, 'Piper', 'M600', 3750000, './resources/N509JJ.webp'),
    ('N34RF', 2016, 'Piper', 'M600', 2525000, './resources/N34RF.jpeg');
`;

// Endpoint to seed database
app.get("/seed", async (req, res) => {
  try {
    await sequelize.query(dropTableSQL);
    await sequelize.query(createTableSQL);
    await sequelize.query(insertDataSQL);
    res.status(200).send("Database seeded successfully!");
  } catch (error) {
    console.error("Seeding failed:", error);
    res.status(500).send("Database seeding failed");
  }
});

// Start server
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT || 3000}`);
});
