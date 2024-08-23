// src/TodoList.js
import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [filter, setFilter] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setTodos([...todos, { text: newTodo, completed: false }]);
    setNewTodo('');
  };

  const handleDelete = (index) => {
    setTodos(todos.filter((todo, i) => i !== index));
  };

  const handleToggleCompleted = (index) => {
    setTodos(
      todos.map((todo, i) => {
        if (i === index) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredTodos = todos.filter((todo) => {
    return todo.text.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <div className="container">
      <h1>To-Do List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTodo}
          onChange={(event) => setNewTodo(event.target.value)}
          placeholder="Add new todo"
        /> <br />
        <button type="submit">Add Todo</button>
      </form>
      <input
        type="text"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Filter todos"
      />
      <ul>
        {filteredTodos.map((todo, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={todo.completed}
              className='checkmark'
              onChange={() => handleToggleCompleted(index)}
              
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
            <button onClick={() => handleDelete(index) } className='button-delete'>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;