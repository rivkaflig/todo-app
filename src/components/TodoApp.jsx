import React, { useState } from 'react';
import '../App.css'; 
import '../styles/ToDoList.css'; 

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedTask = newTask.trim();
    if (!trimmedTask) return;

    setTasks([...tasks, trimmedTask]);
    setNewTask('');
  };

  const handleRemove = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="todo-app">
      <h1>To-Do List</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="task-input"
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a task"
        />
        <button className="add-button" type="submit">Add</button>
      </form>

      {tasks.length === 0 ? (
        <p className="empty-message">No Items Added</p>
      ) : (
        <ul className="task-list">
          {tasks.map((task, index) => (
            <TodoItem key={index} text={task} onRemove={() => handleRemove(index)} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default TodoApp;
