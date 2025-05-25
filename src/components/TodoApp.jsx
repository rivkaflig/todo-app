import { useState } from 'react';
import '../App.css'; 
import '../styles/ToDoList.css'; 
import TodoItem from './TodoItem';

function TodoApp() {
    const [tasks, setTasks] = useState([]);
    const [taskInput, setTaskInput] = useState('');
  
    const addTask = (e) => {
        e.preventDefault();
        if (taskInput.trim() === '') return; // Prevent blank tasks
        setTasks([...tasks, taskInput]);
        setTaskInput('');
    };

    const removeTask = (removing) => {
        setTasks(tasks.filter(task => task !== removing));
    };

    return (
        <div className='container'>
            <div className='todo'>
                <h1>To-Do List</h1>
            </div>
        
            <form className='form' onSubmit={addTask}>
                <input
                    type='text'
                    className='input-field'
                    value={taskInput}
                    onChange={(e) => setTaskInput(e.target.value)}
                    placeholder='Enter a new task'
                    />
                <button type='submit' className='add-button'>Add Task</button>
            </form>

        <ul className="task-list">
            {tasks.length === 0 ? (
                <li>Nothing To Do!</li>
            ) : (
                tasks.map((task, index) => (
                    <TodoItem key={index} task={task} removeTask={removeTask} />
                ))
            )}
        </ul>
    </div>
  );
}

export default TodoApp;
