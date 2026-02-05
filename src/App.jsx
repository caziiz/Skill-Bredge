
import { useState } from "react";
import Courses from "./assets/Pages/Courses";
import Dashboard from "./assets/Pages/Dashboard";
import Navbar from "./Combonents/Navbar";
import Tasks from "./assets/Pages/Task";


function App() {
   const [username , setusername] = useState({user:"Abdiasis"});
  
  return (
    <div className="container">
      {/* <Dashboard/> */}
    <Navbar username={username.user}/>
      {/* <Courses /> */}
      <Tasks />
    </div>
  );
}

export default App;
