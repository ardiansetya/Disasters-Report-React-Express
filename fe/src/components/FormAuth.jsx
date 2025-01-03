import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/CreateSlice.js";
import Button from "./Button";
import axiosInstance from "../axios/AxiosInstance";
import { useNavigate } from "react-router-dom";

const FormAuth = ({ formTitle, formDesc }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axiosInstance.post("/login", formData);
      const { user, token } = response.data;

      // Simpan token dan data user ke dalam Redux state (di memory)
      dispatch(login({ user, token }));

      // Simpan token ke dalam localStorage
      localStorage.setItem("authToken", token);

      // Jika login berhasil, reset form
      setFormData({
        email: "",
        password: "",
      });

      // Redirect ke halaman dashboard setelah berhasil login
      navigate("/dashboard");
      console.log("Login successful:", response.data);
    } catch (err) {
      console.error(
        "Login failed:",
        err.response?.data?.message || err.message
      );
      setError(
        err.response?.data?.message || "Login failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const pLoginRegister = (formTitle) => {
    if (formTitle === "Welcome!") {
      return (
        <p className="text-center text-sm">
          Don't have an account?{" "}
          <a href="/register" className="hover:text-blue-600 font-bold">
            Register Here!
          </a>
        </p>
      );
    } else if (formTitle === "Welcome Back!") {
      return (
        <p className="text-center text-sm">
          Already have an account?{" "}
          <a href="/login" className="hover:text-blue-600 font-bold">
            Login Here!
          </a>
        </p>
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 py-20 px-32 border-gray-200 border rounded-xl shadow-md">
      <div className="text-center flex flex-col gap-2 w-full max-w-lg">
        <h1 className="text-3xl font-bold text-blue-600">{formTitle}</h1>
        <p className="text-sm from-neutral-400">{formDesc}</p>
      </div>
      {error && <p className="text-red-600 text-sm">{error}</p>}
      <div className="flex flex-col gap-2">
        <label className="font-bold" htmlFor="email">
          Email
        </label>
        <input
          className="px-4 py-2 outline-none rounded-md ring-2 focus:ring-2 focus:ring-blue-600"
          type="email"
          name="email"
          placeholder="Enter your email here"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-bold" htmlFor="password">
          Password
        </label>
        <input
          className="px-4 py-2 outline-none rounded-md ring-2 focus:ring-2 focus:ring-blue-600"
          type="password"
          name="password"
          placeholder="Enter your password here"
          value={formData.password}
          onChange={handleChange}
        />
      </div>

      {pLoginRegister(formTitle)}

      <Button type="submit" variant="primary" disabled={loading}>
        {loading ? "Logging in..." : "Login"}
      </Button>
    </form>
  );
};

export default FormAuth;
