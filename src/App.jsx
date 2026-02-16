import { useState, useEffect } from "react";
import { Routes, Route, Navigate, Outlet, useLocation } from "react-router-dom";

import Courses from "./Pages/Courses";
import Dashboard from "./pages/Dashboard";
import Navbar from "./Combonents/Navbar";
import Tasks from "./Pages/Task";
import Login from "./Pages/Login";
import Coursedetail from "./Pages/Coursedetail";

/* ---------- Protected Route ---------- */
function ProtectedRoute({ user, children }) {
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

/* ---------- Login Redirect Handler ---------- */
function LoginRedirect({ user, setuser }) {
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  if (user) return <Navigate to={from} replace />;

  return <Login setuser={setuser} />;
}

/* ---------- Layout ---------- */
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

  // keep login after refresh (optional)
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) setuser(JSON.parse(savedUser));
  }, []);

  return (
    <Routes>

      {/* LOGIN */}
      <Route path="/login" element={<LoginRedirect user={user} setuser={setuser} />} />

      {/* Layout always loads */}
      <Route path="/" element={<Layout user={user} setuser={setuser} />}>

        <Route
          index
          element={
            <ProtectedRoute user={user}>
              <Dashboard user={user} />
            </ProtectedRoute>
          }
        />

        <Route
          path="courses"
          element={
            <ProtectedRoute user={user}>
              <Courses />
            </ProtectedRoute>
          }
        />

        <Route
          path="courses/:id"
          element={
            <ProtectedRoute user={user}>
              <Coursedetail />
            </ProtectedRoute>
          }
        />

        <Route
          path="tasks"
          element={
            <ProtectedRoute user={user}>
              <Tasks />
            </ProtectedRoute>
          }
        />

      </Route>

      <Route path="*" element={<Navigate to="/login" replace />} />

    </Routes>
  );
}

export default App;
