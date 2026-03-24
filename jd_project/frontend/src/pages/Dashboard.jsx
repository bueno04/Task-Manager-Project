import { useEffect, useState } from "react";
import api from "../services/api";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

export default function Dashboard({ user, onLogout }) {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  async function loadTasks() {
    const response = await api.get("/tasks");
    setTasks(response.data);
  }

  useEffect(() => {
    loadTasks();
  }, []);

  async function handleCreateOrUpdate(task) {
    if (editingTask) {
      await api.put(`/tasks/${editingTask.id}`, task);
      setEditingTask(null);
    } else {
      await api.post("/tasks", task);
    }
    loadTasks();
  }

  async function handleDelete(id) {
    await api.delete(`/tasks/${id}`);
    loadTasks();
  }

  function handleLogout() {
    localStorage.removeItem("token");
    onLogout();
  }

  return (
    <div className="container">
      <header className="topbar">
        <div>
          <h1>Welcome, {user.name}</h1>
          <p>Manage your tasks with a fullstack application.</p>
        </div>
        <button className="secondary" onClick={handleLogout}>Logout</button>
      </header>

      <div className="grid">
        <TaskForm
          onSubmit={handleCreateOrUpdate}
          editingTask={editingTask}
          onCancel={() => setEditingTask(null)}
        />
        <TaskList tasks={tasks} onEdit={setEditingTask} onDelete={handleDelete} />
      </div>
    </div>
  );
}
