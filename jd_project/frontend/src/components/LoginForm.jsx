import { useState } from "react";
import api from "../services/api";

export default function LoginForm({ onLogin }) {
  const [email, setEmail] = useState("miguel@example.com");
  const [password, setPassword] = useState("123456");
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");

    try {
      const response = await api.post("/auth/login", { email, password });
      localStorage.setItem("token", response.data.token);
      onLogin(response.data.user);
    } catch (err) {
      setError("Invalid login. Try the demo credentials.");
    }
  }

  return (
    <div className="card auth-card">
      <h1>Task Manager</h1>
      <p>Login to access your task dashboard.</p>

      <form onSubmit={handleSubmit} className="form">
        <label>Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} />

        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>

      {error && <p className="error">{error}</p>}

      <div className="demo-box">
        <strong>Demo:</strong>
        <div>Email: miguel@example.com</div>
        <div>Password: 123456</div>
      </div>
    </div>
  );
}
