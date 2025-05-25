import { useState } from 'react';
import '../App.css'; 
import '../styles/ToDoList.css'; 
import TodoItem from './TodoItem';

function TodoApp() {
    // State to store list
    const [tasks, setTasks] = useState([]);

    // State to store the input
    const [taskInput, input] = useState('');
  
    // Add tasks
    const addTask = (e) => {
        e.preventDefault();
        
        // If blank don't add
        if (taskInput.trim() === '') return;

        // Add to list
        setTasks([...tasks, taskInput]);

        // Clear input bar
        input('');
    };

    // Remove task from array
    const removeTask = (taskToRemove) => {
        setTasks(tasks.filter(task => task !== taskToRemove));
    };

    // Page HTML
    return (
        <div className='container'>
            <div className='todo'>
                <h1>To-Do List</h1>
            </div>
        
              {/* Form to input tasks */}
            <form className='form' onSubmit={addTask}>
                <input
                    type='text'
                    className='input-field'
                    value={taskInput}
                    onChange={(e) => input(e.target.value)}
                    placeholder='Enter a new task'
                    />
                <button type='submit' className='add-button'>Add Task</button>
            </form>

            {/* Display if no tasks */}
            {tasks.length === 0 ? (
                <p>Nothing To Do!</p>
            ) : (
                // Render tasks usins todoItem component
                <ul className="task-list">
                    {tasks.map((task, index) => (
                        <TodoItem key={index} text={task} onRemove={() => removeTask(task)} />
                    ))}
                </ul>
            )}
        </div>
    );
}

export default TodoApp;
