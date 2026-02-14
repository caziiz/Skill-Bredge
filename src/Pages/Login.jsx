import { useState } from "react";

function Login({ setpage, setuser }) {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault(); // stop page reload

    // simple validation
    if (password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    const userdata = {
      email,
      password,
    };

    setuser(userdata);
    setpage("dashboard");
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
            setuser({ email: "DemoAccount @gmail.com", password: "123456" });
            setpage("dashboard");
          }}
        >
          Try Demo Account
        </button>

        <p className="demo-text">
          Demo credentials: Use any email and password (min 6 chars) to get
          started
        </p>
      </div>
    </div>
  );
}

export default Login;
