import React, { Children } from "react";
import { AppContext } from "../App";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

function Absence() {
  const { absences, studentId } = useContext(AppContext);
  const [student, setStudent] = useState();

  const navigate = useNavigate();
  // const newData = date.find((i) => i.children == selectedChild )

  // console.log(selectedChild);
  function backToNames() {
    navigate("/names ");
  }

  useEffect(() => {
    axios(
      `https://attendance-tracker-api.onrender.com/students/${studentId}`
    ).then((i) => setStudent(i.data));
  });

  function backToNames() {
    navigate("/names ");
  }

  return (
    <div className="overflow">
      {<h1 class="underline underline-offset-1 text-2xl text"></h1>}

      <table class="table-auto">
        <thead>
          <tr>
            <th>Absence</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {absences
            .filter((i) => i.student_id == studentId)
            .map((i) => (
              <tr>
                <td>{i.desc}</td>
                <td>
                  {i.from} - {i.to}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <div className="items-center">
        <button onClick={backToNames} className="btn gap-2 btngap">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
          back
        </button>
      </div>
    </div>
  );
}

export default Absence;
