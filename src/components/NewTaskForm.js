import React, { useState } from 'react';

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState('');
  const [category, setCategory] = useState(categories[0]);

  const handleSubmit = event => {
    event.preventDefault();
    const newTask = { text, category };
    onTaskFormSubmit(newTask);
    setText('');
    setCategory(categories[0]);
  };

  return (
    <div>
      <h2>New Task Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="details">Details:</label>
        <input type="text" id="details" value={text} onChange={e => setText(e.target.value)} />

        <label htmlFor="category">Category:</label>
        <select id="category" value={category} onChange={e => setCategory(e.target.value)}>
          {categories.map(cat => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default NewTaskForm;
