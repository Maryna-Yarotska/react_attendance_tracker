import React from "react";
import { AppContext } from "../App";
import { useNavigate } from "react-router-dom";

import { useContext } from "react";

function Login() {
  const navigate = useNavigate();
  const { setUser, parents } = useContext(AppContext);

  function login(e) {
    e.preventDefault();
    let u = e.target.useremail.value;
    let p = e.target.password.value;

    let foundUser = parents.find((i) => i.email == u && i.password == p);
    if (!foundUser) {
      return alert("Login is not correct");
    }
    if (foundUser) {
      console.log("inputs is correct");

      setUser(foundUser);
      navigate("/selectChild");
    } else {
      alert("Invalid login credintials");
    }
   
  }

  return (
    <div className="m-5 drop-shadow-2xl ">
      <div className="card  w-96 bg-primary text-primary-content ">
        <div className="card-body ">
          <h2 className="card-title">LOGIN</h2>

          <form onSubmit={login}>
            <input
              type="text"
              name="useremail"
              placeholder="Type here"
              className="input w-full max-w-xs input-bordered  "
            />
            <input
              type="password"
              name="password"
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

export default Login;
