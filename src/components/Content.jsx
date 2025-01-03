import React from "react";
import Button from "./Button";
import FormContent from "./FormContent";

const Content = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-4">
      <div className="w-full max-w-5xl mb-6">
        <div className="text-center">
          <h1 className="font-bold text-2xl">Formulir Pelaporan Bencana</h1>
        </div>
      </div>
      <div className="w-full max-w-5xl">
        <FormContent />
      </div>
    </div>
  );
};

export default Content;
