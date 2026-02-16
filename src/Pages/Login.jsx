import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setuser }) {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();

    // 1️⃣ validate first
    if (password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    // 2️⃣ save user
    const userdata = { email, password };
    setuser(userdata);

    // 3️⃣ navigate AFTER state update
    navigate("/", {replace:true});
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <div className="logo">
          <div className="logo-box">SB</div>
          <h1>SkillBridge</h1>
          <p>Learn, Manage, Succeed</p>
        </div>

        <form className="login-form" onSubmit={handlesubmit}>
          <label>Email</label>
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            required
          />

          <button type="submit" className="sign-in-btn">
            Sign In
          </button>
        </form>

        <div className="divider">
          <span>or</span>
        </div>

        <button
          className="demo-btn"
          onClick={() => {
            setuser({ email: "demo@gmail.com", password: "123456" });
            navigate("/", { replace: true });
          }}
        >
          Try Demo Account
        </button>
      </div>
    </div>
  );
}

export default Login;
