import React from 'react';
import { useState } from 'react';
import './App.css';

const INITIAL_TASKS = [
  'Learn React',
  'Sit ups very 30 min',
  'Eat healthy'
];

const App = () => {

  const [list, setList] = useState(INITIAL_TASKS);
  const [item, setItem] = useState('');

  const handleSubmit = (event) => {
    if(item){
      setList(list.concat(item));
    }

    setItem('');
    event.preventDefault();
  }

  const handleChange = (event) => {
    setItem(event.target.value);
  }


  return (
    <div>
      <h1>To do</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Add to List" value={item} onChange={handleChange} />
        <button type="submit">Add</button>
      </form>

      <ul>
        {list.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;