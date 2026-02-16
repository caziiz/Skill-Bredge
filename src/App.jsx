import { useState, useEffect } from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";

import Courses from "./Pages/Courses";
import Dashboard from "./pages/Dashboard";
import Navbar from "./Combonents/Navbar";
import Tasks from "./Pages/Task";
import Login from "./Pages/Login";
import Coursedetail from "./Pages/Coursedetail";

function ProtectedRoute({ user, children }) {
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

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

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) setuser(JSON.parse(savedUser));
  }, []);

  return (
    <Routes>
      {/* LOGIN */}
      <Route
        path="/login"
        element={user ? <Navigate to="/" replace /> : <Login setuser={setuser} />}
      />

      <Route
        path="/"
        element={
          <ProtectedRoute user={user}>
            <Layout user={user} setuser={setuser} />
          </ProtectedRoute>
        }
      >
        <Route index element={<Dashboard user={user} />} />
        <Route path="courses" element={<Courses />} />
        <Route path="courses/:id" element={<Coursedetail />} />
        <Route path="tasks" element={<Tasks />} />
      </Route>

    </Routes>
  );
}

export default App;
