import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../App";

function Groups() {
  const {  groups,  setGroupId, groupId } =
    useContext(AppContext);
  // console.log(data);

  const navigate = useNavigate();

  function selectHandler(e) {
    setGroupId(e.target.value);
    navigate("/names");
  }
 

  return (
    

    <div className="btn-group btn-group-vertical">
      {groups &&
        groups.map((i) => (
          <button className="btn btn-wide btn-three" onClick={selectHandler} value={i.id}>
            {i.name}
          </button>
        ))}
       

         
    </div>
          
          
       
   
  );
}

export default Groups;
