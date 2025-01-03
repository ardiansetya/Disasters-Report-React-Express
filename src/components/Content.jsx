import React from "react";
import Button from "./Button";

const Content = () => {
  return (
    <div className="flex justify-between items-center">
      <h1 className="font-bold text-2xl">Laporkan Bencana</h1>
      <Button variant="primary" type="btn">
        Laporkan Bencana
      </Button>
    </div>
  );
};

export default Content;
