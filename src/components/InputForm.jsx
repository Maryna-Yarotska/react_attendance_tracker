import React, { useState } from "react";
import { AppContext } from "../App";
import { useContext } from "react";

function InputForm() {
  const { data } = useContext(AppContext);

  function submitHandler(e) {
    e.preventDefault();
  }

  return (
    <div className="form-control w-full max-w-xs">
      <form action="" onSubmit={submitHandler}>
        <input
          type="date"
          name="inputFrom"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
        <label className="label">
          <span className="label-text">Absence from?</span>
        </label>
        <label className="label">
          <span className="label-text">Absence to?</span>
        </label>
        <input
          type="date"
          name="inputTo"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
        <label className="label">
          <span className="label-text">What is reason of absence?</span>
        </label>
        <input
          type="text"
          name="reasonInput"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
        <button className="btn btngap" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default InputForm;
