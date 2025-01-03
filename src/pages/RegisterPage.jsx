import React from "react";
import FormAuth from "../components/FormAuth";

const RegisterPage = () => {
  return (
    <section className="min-h-screen bg-slate-50">
      <div className="container mx-auto">
        <div className="flex justify-center items-center h-screen">
          <FormAuth
            formTitle={"Welcome Back!"}
            formDesc={"Register your account"}
          />
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
