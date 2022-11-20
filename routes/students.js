const express = require("express");
const router = express.Router();

const {
  getStudents,
  getStudent,
  addStudent,
  editStudent,
  deleteStudent,
  addform,
} = require("../controllers/studentController");

// Get all students
router.get("/", getStudents);

// Get a single student
router.get("/:id", getStudent);

// Create a student
router.post("/create", addStudent);

// Update a student
router.put("/update/:id", editStudent);

// Deleting a student
router.delete("/:id", deleteStudent);

//create postdetails
router.post("/submit", addform);

module.exports = router;
