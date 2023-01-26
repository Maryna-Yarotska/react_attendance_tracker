import React from "react";
import { AppContext } from "../App";
import { useNavigate } from "react-router-dom";

import { useContext } from "react";

function LoginAdmin() {

  const navigate = useNavigate();
  const { admins, adminLog, setAdminLog } = useContext(AppContext);

  function adminLogin(e) {
    e.preventDefault();
    let adm = e.target.adminemail.value;
    let code = e.target.adminpassword.value;

    let foundAdmin = admins.find((i) => i.email == adm && i.passowrd == code);
    if (!foundAdmin) {
      return alert("Login is not correct");
    }
    if (foundAdmin) {
      console.log("inputs is correct");

      setAdminLog(foundAdmin);
      navigate("/groups");
    } else {
      alert("Invalid login credintials");
    }
   
  }

  return (
    <div className="drop-shadow-2xl">
      <div className="card w-96 bg-primary text-primary-content ">
        <div className="card-body">
          <h2 className="card-title">LOGIN</h2>

          <form onSubmit={adminLogin}>
            <input
              type="text"
              name="adminemail"
              placeholder="Type here"
              className="input w-full max-w-xs input-bordered"
            />
            <input
              type="password"
              name="adminpassword"
              placeholder="Type here"
              className="input w-full max-w-xs input-bordered"
            />
            <button className="btn gap">LOGIN</button>
          </form>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </div>
  );
}

export default LoginAdmin;
