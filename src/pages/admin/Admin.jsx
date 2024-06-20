import React from "react";
import "./admin.scss";
import { IoMdExit } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import AdminCreate from "./AdminCreate";

const Admin = () => {
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <div className="admin">
      <div className="admin__container">
        <div className="admin__sidebar">
          <button onClick={handleLogOut} className="admin__log-out">
            <IoMdExit />
          </button>
        </div>
        <div className="admin__content">
          <h2 className=" text-center">Create Card</h2>
          <AdminCreate />
        </div>
      </div>
    </div>
  );
};

export default Admin;
