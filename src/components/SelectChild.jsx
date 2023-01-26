import React, { useState } from "react";

import { useContext } from "react";
import { AppContext } from "../App";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SelectChild() {
  const { user, students } = useContext(AppContext);
  const [studetnId, setStudetnId] = useState([]);
  const [studentName, setStudentName] = useState([]);
  const notify = () => toast("We get your message");
  const navigate = useNavigate();

  function submitHandler(e) {
    e.preventDefault();
    axios
      .post("https://attendance-tracker-api.onrender.com/absence", {
        desc: e.target.reasonInput.value,
        from: e.target.inputFrom.value,
        to: e.target.inputTo.value,
        student_id: studetnId,
      })
      .then((res) => console.log(res));

    e.target.inputFrom.value = "";
    e.target.inputTo.value = "";
    e.target.reasonInput.value = "";
    navigate("/thanks");
  }

  function clickHandler(e) {
    if (studetnId.includes(e.target.name)) {
      return;
    } else {
      setStudetnId((i) => [...i, e.target.name]);
    }
    let result = students.find((i) => i.id == e.target.name);
    if (studentName.includes(result.name)) {
      return;
    } else {
      setStudentName((i) => [...i, result.name]);
    }
  }

  return (
    <div>
      {students
        .filter((i) => user.student_id.includes(i.id))
        .map((i, j) => (
          <button onClick={clickHandler} name={i.id} key={j} className="btn">
            {i.name}
          </button>
        ))}

      <div className="form-control w-full max-w-xs inputt  ">
        <form onSubmit={submitHandler}>
          <div>
            <input
              type="text"
              name="studentName"
              value={studentName}
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="flex ">
            <div className="flex-1">
              <label className="label">
                <span className="label-text">Absence from?</span>
              </label>

              <input
                type="date"
                name="inputFrom"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </div>

            <div className="flex-1">
              <label className="label">
                <span className="label-text">Absence to?</span>
              </label>
              <input
                type="date"
                name="inputTo"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>
          <label className="label">
            <span className="label-text">What is reason of absence?</span>
          </label>
          <input
            type="text"
            name="reasonInput"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />

          <div className="btn-group btngap">
            <button className="btn " type="submit">
              Submit
            </button>
            {/* <button className="btn " type="submit" onClick={clickClose}>
              Close
            </button> */}
          </div>
          <ToastContainer />
        </form>
      </div>
    </div>
  );
}

export default SelectChild;
