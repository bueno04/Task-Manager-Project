import { useEffect, useState } from "react";

const initialState = {
  title: "",
  description: "",
  status: "To Do",
  priority: "Medium"
};

export default function TaskForm({ onSubmit, editingTask, onCancel }) {
  const [form, setForm] = useState(initialState);

  useEffect(() => {
    setForm(editingTask || initialState);
  }, [editingTask]);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit(form);
    if (!editingTask) setForm(initialState);
  }

  return (
    <div className="card">
      <h2>{editingTask ? "Edit Task" : "Create Task"}</h2>

      <form onSubmit={handleSubmit} className="form">
        <label>Title</label>
        <input name="title" value={form.title} onChange={handleChange} required />

        <label>Description</label>
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          rows="4"
          required
        />

        <label>Status</label>
        <select name="status" value={form.status} onChange={handleChange}>
          <option>To Do</option>
          <option>In Progress</option>
          <option>Done</option>
        </select>

        <label>Priority</label>
        <select name="priority" value={form.priority} onChange={handleChange}>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

        <div className="actions">
          <button type="submit">{editingTask ? "Update" : "Create"}</button>
          {editingTask && (
            <button type="button" className="secondary" onClick={onCancel}>
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
