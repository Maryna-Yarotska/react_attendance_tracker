import "./App.css";
import Names from "./components/Names";
import Login from "./components/Login";
import Home from "./components/Home";
import Groups from "./components/Groups";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Absence from "./components/Absence";
import InputForm from "./components/InputForm";
import LoginAdmin from "./components/LoginAdmin";
import Thanks from "./components/Thanks";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { createContext } from "react";
import SelectChild from "./components/SelectChild";
import axios from "axios";
export const AppContext = createContext();

function App() {
  const [groups, setGroups] = useState();
  const [students, setStudents] = useState();
  const [parents, setParents] = useState();
  const [admins, setAdmins] = useState();
  const [absences, setAbsences] = useState();
  const [groupId, setGroupId] = useState();
  const [studentId, setStudentId] = useState();
  const [inputFrom, setInputFrom] = useState();
  const [inputTo, setInputTo] = useState();
  const [reasonInput, setReasonInput] = useState();
  const [user, setUser] = useState();
  const [adminLog, setAdminLog] = useState();

  const navigate = useNavigate();

  function fetching() {
    axios("https://attendance-tracker-api.onrender.com/parents").then((i) =>
      setParents(i.data)
    );
    axios("https://attendance-tracker-api.onrender.com/groups").then((i) =>
      setGroups(i.data)
    );
    axios("https://attendance-tracker-api.onrender.com/students").then((i) =>
      setStudents(i.data)
    );
    axios("https://attendance-tracker-api.onrender.com/admins").then((i) =>
      setAdmins(i.data)
    );
    axios("https://attendance-tracker-api.onrender.com/absence").then((i) =>
      setAbsences(i.data)
    );
  }
  useEffect(() => {
    fetching();
  }, []);

  return (
    <div
      className="h-screen flex flex-col  justify-between items-center"
      data-theme="cupcake"
    >
      {<Navbar />}

      <AppContext.Provider
        value={{
          parents,
          groups,
          students,
          absences,
          admins,
          groupId,
          setGroupId,
          studentId,
          setStudentId,
          user,
          setUser,
          inputFrom,
          setInputFrom,
          inputTo,
          setInputTo,
          reasonInput,
          setReasonInput,
          adminLog,
          setAdminLog,
        }}
      >
        {/* <ToastContainer /> */}

        <Routes>
          {/* parents routes */}
          <Route path="/" element={<Login />} />

          <Route path="/selectChild" element={<SelectChild />} />
          <Route path="/inputform" element={<InputForm />} />
          <Route path="/thanks" element={<Thanks />} />

          {/* admin routes */}
          <Route path="/loginAdmin" element={<LoginAdmin />} />

          <Route path="/groups" element={<Groups />} />
          <Route path="/names" element={<Names />} />
          <Route path="/absence" element={<Absence />} />
        </Routes>
      </AppContext.Provider>

      {<Footer />}
    </div>
  );
}

export default App;
