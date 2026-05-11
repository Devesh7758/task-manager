const express = require("express");

const {
  createProject,
  getProjects,
  deleteProject,
} = require("../controllers/projectController");

const { protect } = require("../middleware/authMiddleware");
const { admin } = require("../middleware/adminMiddleware");

const router = express.Router();

router.route("/")
  .post(protect, createProject)
  .get(protect, getProjects);

router.delete("/:id", protect, admin, deleteProject);

module.exports = router;