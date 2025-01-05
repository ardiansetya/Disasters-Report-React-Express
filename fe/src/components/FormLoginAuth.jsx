import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/CreateSlice.js";
import Button from "./Button.jsx";
import { Link, useNavigate } from "react-router-dom";

const FormLoginAuth = ({ formTitle, formDesc }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {  loading, } = useSelector((state) => state.user);


  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Mencegah perilaku default form
    try {
      const resultAction = await dispatch(login(formData));
      if (login.fulfilled.match(resultAction)) {
        navigate("/dashboard");
      } else {
    
        console.error(resultAction.payload || "Login failed.");
      }
    } catch (error) {
      console.error("Unexpected error:", error);
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
      {formTitle === "Welcome!" && (
        <div className="flex flex-col gap-2">
          <label className="font-bold" htmlFor="email">
            name
          </label>
          <input
            className="px-4 py-2 outline-none rounded-md ring-2 focus:ring-2 focus:ring-blue-600"
            type="name"
            name="name"
            placeholder="Enter your name here"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
      )}
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

      <p className="text-center text-sm">
        Don&apos;t have an account?{" "}
        <Link to="/register" className="hover:text-blue-600 font-bold">
          Register Here!
        </Link>
      </p>
      <Button type="submit" variant="primary" disabled={loading}>
        {loading ? "Logging in..." : "Login"}
      </Button>
    </form>
  );
};

export default FormLoginAuth;
