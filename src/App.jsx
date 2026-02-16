import { useState } from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";

import Courses from "./Pages/Courses";
import Dashboard from "./pages/Dashboard";
import Navbar from "./Combonents/Navbar";
import Tasks from "./Pages/Task";
import Login from "./Pages/Login";
import Coursedetail from "./Pages/Coursedetail";

// Layout component (parent route)
function Layout({ user, setuser }) {
  return (
    <>
      <Navbar user={user?.email.split("@")[0]} setuser={setuser} />
      <Outlet />
    </>
  );
}

function App() {
  const [user, setuser] = useState(null);

  // not logged in → only login page
  if (!user) return <Login setuser={setuser} />;

  return (
    <Routes>
      <Route path="/" element={<Layout user={user} setuser={setuser} />}>
        
        <Route index element={<Dashboard user={user} />} />

        <Route path="courses" element={<Courses />} />
        <Route path="courses/:id" element={<Coursedetail />} />
        <Route path="tasks" element={<Tasks />} />

      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
