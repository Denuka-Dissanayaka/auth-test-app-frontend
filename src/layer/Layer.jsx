import React from "react";
import Navbar from "../components/Navbar";

function Layer({ children }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}

export default Layer;
