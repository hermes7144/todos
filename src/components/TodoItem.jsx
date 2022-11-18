import React from 'react';

export default function TodoItem({ text, done }) {
  return (
    <div>
      <input type="checkbox" value={done} />
      <span>{text}</span>
    </div>
  );
}
