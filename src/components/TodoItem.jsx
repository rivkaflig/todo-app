// Task and remove button
function TodoItem({ text, onRemove }) {
    return (
        <li className='task-item'>
            <span>{text}</span>
            {/* Calls remove task function */}
            <button className='remove-button' onClick={(onRemove)}>
                Remove
            </button>
        </li>
    );
}

export default TodoItem;
