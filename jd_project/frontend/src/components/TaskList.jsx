export default function TaskList({ tasks, onEdit, onDelete }) {
  if (!tasks.length) {
    return (
      <div className="card">
        <h2>Your Tasks</h2>
        <p>No tasks yet. Create your first task.</p>
      </div>
    );
  }

  return (
    <div className="card">
      <h2>Your Tasks</h2>

      <div className="task-list">
        {tasks.map((task) => (
          <div key={task.id} className="task-item">
            <div className="task-header">
              <h3>{task.title}</h3>
              <div className="pill-group">
                <span className="pill">{task.status}</span>
                <span className="pill">{task.priority}</span>
              </div>
            </div>

            <p>{task.description}</p>

            <div className="actions">
              <button onClick={() => onEdit(task)}>Edit</button>
              <button className="danger" onClick={() => onDelete(task.id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
