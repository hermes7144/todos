import React, { useState } from 'react';
import styles from './Todo.module.css';
import TodoItem from './TodoItem';

export default function Todo() {
  const [todos, setTodos] = useState(initialState);
  const [input, setInput] = useState('');

  let id = todos.length + 1;

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos.concat({ id, text: input, done: false })]);
    setInput('');
  };

  return (
    <div className={styles.container}>
      <div className={styles.todo}>
        <ul>
          {todos.map((todo) => (
            <li>
              <TodoItem key={todo.id} text={todo.text} done={todo.done} />
            </li>
          ))}
        </ul>
        <div>
          <form onSubmit={handleSubmit}>
            <input
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
            <button>Add</button>
          </form>
        </div>
      </div>
    </div>
  );
}

const initialState = [{ id: 1, text: '공부하기', done: false }];
