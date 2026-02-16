import { Link, useNavigate } from "react-router-dom";

function Navbar({ user, setuser }) {
  const navigate = useNavigate();

  function handleLogout() {
    setuser(null);

    localStorage.removeItem("user");

    navigate("/login", { replace: true });
  }

  return (
    <div className="main">
      <div className="navcontent">
        <img src="logo.png" alt="SkillBridge" />

        <ul className="dashboard">
          <Link className="btn" to="/">Dashboard</Link>
          <Link className="btn" to="/courses">Courses</Link>
          <Link className="btn" to="/tasks">Tasks</Link>
        </ul>

        <div className="button">
          <h3>
            {user}
            <p>{user}</p>
          </h3>

          <button onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
