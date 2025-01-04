import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "./Button.jsx";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../redux/CreateSlice.js";

const FormRegisterAuth = ({ formTitle, formDesc }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, loading, message } = useSelector((state) => state.user);
  console.log(user);

  const [formData, setFormData] = useState({
    name: "",
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
    try {
      e.preventDefault();
      dispatch(register(formData));
      navigate("/login");
    } catch (error) {
      console.log(error);
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
      {message && <p className="text-red-600 text-sm">{message}</p>}
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
        Already have an account?{" "}
        <Link to="/login" className="hover:text-blue-600 font-bold">
          Login Here!
        </Link>
      </p>
      <Button type="submit" variant="primary" disabled={loading}>
        {loading ? "Registering in..." : "Register"}
      </Button>
    </form>
  );
};

export default FormRegisterAuth;
