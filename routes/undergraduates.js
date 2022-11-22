const express = require("express");
const router = express.Router();

const {
  getUndergraduates,
  getUndergraduate,
  addUndergraduate,
  editUndergraduate,
  deleteUndergraduate,
} = require("../controllers/undergraduateController");
// Get all undergradates
router.get("/", getUndergraduates);

// Get a single undergradate
router.get("/:id", getUndergraduate);

// Create a undergradate
router.post("/create", addUndergraduate);

// Update a undergradate
router.put("/update/:id", editUndergraduate);

// Deleting a undergradate
router.delete("/:id", deleteUndergraduate);

module.exports = router;
