const Project = require("../models/Project");
const Task = require("../models/Task");

const getDashboardStats = async (req, res) => {
  try {
    const totalProjects =
      await Project.countDocuments({
        createdBy: req.user._id,
      });

    const totalTasks =
      await Task.countDocuments({
        createdBy: req.user._id,
      });

    const completedTasks =
      await Task.countDocuments({
        createdBy: req.user._id,
        status: "completed",
      });

    const pendingTasks =
      await Task.countDocuments({
        createdBy: req.user._id,
        status: { $ne: "completed" },
      });

    const overdueTasks =
      await Task.countDocuments({
        createdBy: req.user._id,
        status: { $ne: "completed" },
        dueDate: { $lt: new Date() },
      });

    res.status(200).json({
      totalProjects,
      totalTasks,
      completedTasks,
      pendingTasks,
      overdueTasks,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = { getDashboardStats };