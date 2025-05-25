function TodoItem({ text, removeTask }) {
    return (
        <li className="task-item">
            <span>{text}</span>
                <button className="remove-button" onClick={() => removeTask(task)}>
                    Remove
                </button>
        </li>
    );
}

export default TodoItem;
