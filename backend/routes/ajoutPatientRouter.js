const express = require("express");
const ajoutPatientControllers = require("../controllers/ajoutPatientControllers.js");

const router = express.Router();

router.post("/testTodo", ajoutPatientControllers.createPatient);
router.get("/testTodo", ajoutPatientControllers.getAllPatients);
router.get("/testTodo/:id", ajoutPatientControllers.getPatient);
router.put("/testTodo/:id", ajoutPatientControllers.updatePatient);
router.delete("/testTodo/:id", ajoutPatientControllers.deletePatient);

module.exports = router;
