import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();


  function closeClick () {
    navigate("/loginadmin");

  }

  return (
    <div className="navbar bg-neutral text-neutral-content">
      <a className="btn btn-ghost normal-case text-xl " target="_blank" href="https://uni-kindergarten.de/language/en/home-striped-landing-page-en/"> 
      Uni Kinder Garten</a>

      <button className="btn btn-circle absolute top-0 right-0"  onClick={closeClick}>
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button>

      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
        {/* <img  src={img} alt=""/> */}
        <img src="https://images.unsplash.com/photo-1586921829167-409624a3734a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
        </div>
      </label>
       
    </div>
  );
}

export default Navbar;
