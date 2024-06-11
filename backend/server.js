const express = require("express");
const bodyParser = require("body-parser");
const pool = require("./db");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/patients", async (req, res) => {
  const { first_name, last_name, dob, gender, email, phone, address, city } =
    req.body;

  try {
    const result = await pool.query(
      `INSERT INTO patients (first_name, last_name, dob, gender, email, phone, address, city) 
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`,
      [first_name, last_name, dob, gender, email, phone, address, city]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
