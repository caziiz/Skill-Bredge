function Navbar({ user, setpage, setuser }) {
  return (
    <div className="main">
      <div className="navcontent">
        <img src="logo.png" alt="SkillBridge" />

        <ul className="dashboard">
          <button className="btn" onClick={() => setpage("dashboard")}>Dashboard</button>
          <button className="btn" onClick={() => setpage("courses")}>Courses</button>
          <button className="btn" onClick={() => setpage("tasks")}>Tasks</button>
        </ul>

        <div className="button">
          <h3>
            {user}
            <p>{user}</p>
          </h3>

          <button
            onClick={() => {
              setuser(null);
              setpage("login");
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
