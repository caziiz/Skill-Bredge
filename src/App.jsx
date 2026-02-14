import { useState } from "react";
import Courses from "./Pages/Courses";
import Dashboard from "./pages/Dashboard";
import Navbar from "./Combonents/Navbar";
import Tasks from "./Pages/Task";
import Login from "./Pages/Login";
import Coursedetail from "./Pages/Coursedetail";

function App() {
  const [user, setuser] = useState(null);
  const [page, setpage] = useState("login");
  const[selectedcourse, setselectedcourse] = useState(null)
  console.log(page);
  

  // Show login only
  if (page === "login") {
    return <Login setuser={setuser} setpage={setpage} />;
  }

  return (
    <div className="container">
      <Navbar
  user={user ? user.email.split("@")[0] : ""}
  setpage={setpage}
  setuser={setuser}
/>



      {page === "dashboard" && <Dashboard user={user} />}
      {page === "courses" && <Courses  setselectedcourse={setselectedcourse} setpage ={setpage}/>}
      {page === "Coursedetail" && <Coursedetail course={selectedcourse} setpage ={setpage} />}
      {page === "tasks" && <Tasks />}

    </div>
  );
}

export default App;
