import React from 'react';
import logo from './logo.svg';
import './App.css';

interface Todo {
  title: string,
  dueDate: Date|null
}

type TodoList = Array<Todo>;

const items : TodoList = [
  {title: "Item 1", dueDate: null},
  {title: "Item 2", dueDate: null},
  {title: "Item 3", dueDate: null},
];

const app = {
  items
};

function App() {
  const [list, setList] = React.useState(app.items);
  const [title, setTitle] = React.useState('');
  const [dueDate, setDueDate] = React.useState('');

  React.useEffect(() => {
    if (!("Notification" in window)) {
      console.log("Browser does not support desktop notification");
    } else {
      Notification.requestPermission();
    }
  });

  function handleSubmit() {
    const newItem : Todo = {
      title,
      dueDate: dueDate ? new Date(dueDate) : null
    };
    setList(list.concat(newItem));
  }

  function onNotification(){
    new Notification('Hello World');
  }

  return (
    <div className="App">
      <header className="App-header">
        Todo
      </header>
      <ol>
        {list.map(item => <li>{item.title}</li>)}
      </ol>
      <input type="text" name="title" value={ title } onChange={e => setTitle(e.target.value)} />
      <input type="datetime-local" name="dueDate" value={ dueDate } onChange={e => setDueDate(e.target.value)} />
      <button onClick={() => handleSubmit()}>Submit</button>
      <button onClick={() => onNotification()}>Notify</button>
    </div>
  );
}

export default App;
