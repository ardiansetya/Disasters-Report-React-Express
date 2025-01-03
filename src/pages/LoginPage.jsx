import React from "react";
import Form from "../components/Form";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto">
        <div className="flex justify-center items-center h-screen">
            <Form formTitle={"Welcome!"} formDesc={"Login to your account"}  />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
