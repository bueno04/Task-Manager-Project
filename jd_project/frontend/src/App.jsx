import { useEffect, useState } from "react";
import api from "./services/api";
import LoginForm from "./components/LoginForm";
import Dashboard from "./pages/Dashboard";

export default function App() {
  const [user, setUser] = useState(null);
  const [checkingToken, setCheckingToken] = useState(true);

  useEffect(() => {
    async function verifyToken() {
      const token = localStorage.getItem("token");
      if (!token) {
        setCheckingToken(false);
        return;
      }

      try {
        const response = await api.get("/tasks");
        if (response.status === 200) setUser({ name: "Miguel" });
      } catch (error) {
        localStorage.removeItem("token");
      } finally {
        setCheckingToken(false);
      }
    }

    verifyToken();
  }, []);

  if (checkingToken) return <div className="center-screen">Loading...</div>;

  return user ? (
    <Dashboard user={user} onLogout={() => setUser(null)} />
  ) : (
    <div className="center-screen">
      <LoginForm onLogin={setUser} />
    </div>
  );
}
