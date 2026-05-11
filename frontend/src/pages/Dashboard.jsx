import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import API from "../services/api";

function Dashboard() {
  const [stats, setStats] = useState({
    totalProjects: 0,
    totalTasks: 0,
    completedTasks: 0,
    pendingTasks: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const userInfo = JSON.parse(
          localStorage.getItem("userInfo")
        );

        const { data } = await API.get("/dashboard", {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        });

        setStats(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchStats();
  }, []);

  return (
    <MainLayout>
      <h1 className="text-3xl font-bold mb-6">
        Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-slate-800 p-6 rounded-xl">
          <h2 className="text-xl">Projects</h2>

          <p className="text-4xl mt-4 text-blue-500">
            {stats.totalProjects}
          </p>
        </div>

        <div className="bg-slate-800 p-6 rounded-xl">
          <h2 className="text-xl">Tasks</h2>

          <p className="text-4xl mt-4 text-yellow-400">
            {stats.totalTasks}
          </p>
        </div>

        <div className="bg-slate-800 p-6 rounded-xl">
          <h2 className="text-xl">Completed</h2>

          <p className="text-4xl mt-4 text-green-500">
            {stats.completedTasks}
          </p>
        </div>

        <div className="bg-slate-800 p-6 rounded-xl">
          <h2 className="text-xl">Pending</h2>

          <p className="text-4xl mt-4 text-red-500">
            {stats.pendingTasks}
          </p>
        </div>
      </div>
    </MainLayout>
  );
}

export default Dashboard;