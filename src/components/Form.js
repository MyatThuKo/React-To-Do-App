import React from 'react'

export default function Form({ setInputText, inputText, setToDos, todos, setStatus }) {
    const inputTextHandler = (e) => {
        e.preventDefault();
        setInputText(e.target.value);
    };

    const submitToDoHandler = (e) => {
        e.preventDefault();
        setToDos([
            ...todos, { text: inputText, completed: false, id: Math.random() * 1000 }
        ])
        setInputText("");
    };

    const statusHandler = (e) => {
        setStatus(e.target.value);
    };

    return (
        <div>
            <form>
                <input type="text" className="todo-input" onChange={inputTextHandler} value={inputText} />
                <button className="todo-button" type="submit" onClick={submitToDoHandler}>
                    <i className="fas fa-plus-square"></i>
                </button>
                <div className="select">
                    <select name="todos" className="filter-todo" onChange={statusHandler}>
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </form>
        </div>
    )
}
