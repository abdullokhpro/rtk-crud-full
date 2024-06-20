import React from "react";
import Header from "./header/Header";
import { Outlet } from "react-router-dom";

const Layouts = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layouts;
