import React, { useState } from "react";
import { AppContext } from "../App";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

function Names() {
  const {
    parents,
    groups,
    students,
    groupId,
    setStudentId,
    studentId,
  } = useContext(AppContext);

  const navigate = useNavigate();

  function clickHandler(e) {
    setStudentId(e.target.value);
    navigate("/absence");
  }

  function backToGroups() {
    navigate("/groups ");
  }

  return (
    <div >
      <div className="flex flex-col w-full border-opacity-50">
        <div className="grid h-20 card yellow rounded-box place-items-center">
          {groups.find(i => i.id == groupId).name}
        </div>

        {students &&
          students
            .filter((i) => i.group_id == groupId)
            .map((i) => (
              <button className="btn gap" value={i.id} onClick={clickHandler}>
                {i.name}{" "}
              </button>
            ))}

        <button onClick={backToGroups} className="btn gap-2 btngap">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
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

export default Names;
