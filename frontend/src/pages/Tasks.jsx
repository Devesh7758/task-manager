import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import API from "../services/api";

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [projects, setProjects] = useState([]);

  const [loading, setLoading] =
    useState(false);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "medium",
    project: "",
  });

  const userInfo = JSON.parse(
    localStorage.getItem("userInfo")
  );

  const fetchTasks = async () => {
    try {
      const { data } = await API.get("/tasks", {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      });

      setTasks(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchProjects = async () => {
    try {
      const { data } = await API.get("/projects", {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      });

      setProjects(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTasks();
    fetchProjects();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await API.post("/tasks", formData, {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      });

      setFormData({
        title: "",
        description: "",
        priority: "medium",
        project: "",
      });

      fetchTasks();

      toast.success("Task added");
    } catch (error) {
      toast.error("Failed to add task");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await API.delete(`/tasks/${id}`, {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      });

      fetchTasks();

      toast.success("Task deleted");
    } catch (error) {
      toast.error("Failed to delete task");
    }
  };

  const handleStatusUpdate = async (
    id,
    currentStatus
  ) => {
    const newStatus =
      currentStatus === "completed"
        ? "todo"
        : "completed";

    try {
      await API.put(
        `/tasks/${id}`,
        {
          status: newStatus,
        },
        {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        }
      );

      fetchTasks();

      toast.success("Task updated");
    } catch (error) {
      toast.error("Failed to update task");
    }
  };

  return (
    <MainLayout>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">
          Tasks
        </h1>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-slate-800 p-5 rounded-xl mb-6 flex flex-col gap-4"
      >
        <input
          type="text"
          name="title"
          placeholder="Task Title"
          value={formData.title}
          onChange={handleChange}
          className="p-3 rounded bg-slate-700 outline-none"
        />

        <textarea
          name="description"
          placeholder="Task Description"
          value={formData.description}
          onChange={handleChange}
          className="p-3 rounded bg-slate-700 outline-none"
        />

        <select
          name="priority"
          value={formData.priority}
          onChange={handleChange}
          className="p-3 rounded bg-slate-700 outline-none"
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>

        <select
          name="project"
          value={formData.project}
          onChange={handleChange}
          className="p-3 rounded bg-slate-700 outline-none"
        >
          <option value="">
            Select Project
          </option>

          {projects.map((project) => (
            <option
              key={project._id}
              value={project._id}
            >
              {project.title}
            </option>
          ))}
        </select>

        <button className="bg-blue-500 py-3 rounded">
          {loading ? "Loading..." : "Add Task"}
        </button>
      </form>

      <div className="flex flex-col gap-5">
        {tasks.map((task) => (
          <div
            key={task._id}
            className="bg-slate-800 p-5 rounded-xl"
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-semibold">
                  {task.title}
                </h2>

                <p className="text-gray-300 mt-2">
                  {task.description}
                </p>

                <p className="text-sm mt-2 text-blue-400">
                  Project: {task.project?.title}
                </p>
              </div>

              <div className="flex gap-3 items-center">
                <span className="bg-yellow-500 px-3 py-1 rounded">
                  {task.priority}
                </span>

                <button
                  onClick={() =>
                    handleStatusUpdate(
                      task._id,
                      task.status
                    )
                  }
                  className={`px-3 py-1 rounded ${
                    task.status === "completed"
                      ? "bg-green-500"
                      : "bg-gray-500"
                  }`}
                >
                  {task.status}
                </button>

                <button
                  onClick={() =>
                    handleDelete(task._id)
                  }
                  className="bg-red-500 px-3 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </MainLayout>
  );
}

export default Tasks;