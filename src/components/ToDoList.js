import React from 'react'
import ToDo from './ToDo'

export default function ToDoList({ todos, setToDos, filteredToDos }) {
    return (
        <div>
            <div className="todo-container">
                <ul className="todo-list">
                    {filteredToDos.map(todo => (
                        <ToDo
                            text={todo.text}
                            key={todo.id}
                            todos={todos}
                            setToDos={setToDos}
                            todo={todo}
                            filteredToDos={filteredToDos}
                        />
                    ))}
                </ul>
            </div>
        </div>
    )
}
