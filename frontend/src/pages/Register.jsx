import toast from "react-hot-toast";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";

function Register() {
  const navigate = useNavigate();

  const [loading, setLoading] =
    useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

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
      await API.post(
        "/auth/register",
        formData
      );

      toast.success(
        "Registration successful"
      );

      navigate("/");
    } catch (error) {
      toast.error("Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950">
      <div className="bg-slate-900 p-8 rounded-2xl w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Register
        </h1>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="p-3 rounded bg-slate-800 outline-none"
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="p-3 rounded bg-slate-800 outline-none"
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="p-3 rounded bg-slate-800 outline-none"
            onChange={handleChange}
          />

          <button className="bg-blue-500 py-3 rounded font-semibold">
            {loading ? "Loading..." : "Register"}
          </button>
        </form>

        <p className="mt-5 text-center">
          Already have an account?{" "}
          <Link
            to="/"
            className="text-blue-500"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;