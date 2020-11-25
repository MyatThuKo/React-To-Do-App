import React, { useEffect, useState } from "react";
import './App.css';
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";

function App() {

  const [inputText, setInputText] = useState("");
  const [todos, setToDos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredToDos, setFilteredToDos] = useState([]);

  useEffect(() => {
    getLocalToDos();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalToDos();
  }, [todos, status]);

  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredToDos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredToDos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredToDos(todos);
        break;
    }
  }

  const saveLocalToDos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  const getLocalToDos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setToDos(todoLocal);
    }
  }

  return (
    <div className="App">
      <header>
        <h1>React-app To Do List</h1>
      </header>
      <Form
        todos={todos}
        setToDos={setToDos}
        setInputText={setInputText}
        inputText={inputText}
        setStatus={setStatus}
      />
      <ToDoList
        todos={todos}
        setToDos={setToDos}
        filteredToDos={filteredToDos}
      />
    </div>
  );
}

export default App;
