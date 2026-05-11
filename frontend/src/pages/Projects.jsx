import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import API from "../services/api";

function Projects() {
  const [projects, setProjects] = useState([]);

  const [loading, setLoading] =
    useState(false);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const userInfo = JSON.parse(
    localStorage.getItem("userInfo")
  );

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
      await API.post("/projects", formData, {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      });

      setFormData({
        title: "",
        description: "",
      });

      fetchProjects();

      toast.success("Project added");
    } catch (error) {
      toast.error("Failed to add project");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await API.delete(`/projects/${id}`, {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      });

      fetchProjects();

      toast.success("Project deleted");
    } catch (error) {
      toast.error("Failed to delete project");
    }
  };

  return (
    <MainLayout>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">
          Projects
        </h1>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-slate-800 p-5 rounded-xl mb-6 flex flex-col gap-4"
      >
        <input
          type="text"
          name="title"
          placeholder="Project Title"
          value={formData.title}
          onChange={handleChange}
          className="p-3 rounded bg-slate-700 outline-none"
        />

        <textarea
          name="description"
          placeholder="Project Description"
          value={formData.description}
          onChange={handleChange}
          className="p-3 rounded bg-slate-700 outline-none"
        />

        <button className="bg-blue-500 py-3 rounded">
          {loading ? "Loading..." : "Add Project"}
        </button>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project._id}
            className="bg-slate-800 p-5 rounded-xl"
          >
            <h2 className="text-2xl font-semibold mb-3">
              {project.title}
            </h2>

            <p className="text-gray-300 mb-4">
              {project.description}
            </p>

            <button
              onClick={() =>
                handleDelete(project._id)
              }
              className="bg-red-500 px-4 py-2 rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </MainLayout>
  );
}

export default Projects;