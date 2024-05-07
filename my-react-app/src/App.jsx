import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function TodoList({ todos, toggleTodo }) {
    return (
        <ul>
            {todos.map(todo => (
                <li
                    key={todo.id}
                    onClick={() => toggleTodo(todo.id)}
                    style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                >
                    {todo.text}
                </li>
            ))}
        </ul>
    );
}

function TodoForm({ addTodo }) {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) return;
        addTodo(text);
        setText('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <button type="submit">Додати</button>
        </form>
    );
}

function App() {
    const [todos, setTodos] = useState([
        { id: 1, text: 'Пограти на гітарі', completed: false },
        { id: 2, text: 'Почитати книгу', completed: true },
        { id: 3, text: 'Зробити зарядку', completed: false }
    ]);

    const toggleTodo = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    const addTodo = (text) => {
        const newTodo = {
            id: todos.length + 1,
            text,
            completed: false
        };
        setTodos([...todos, newTodo]);
    };

    return (
        <div className="app">
            <h1>Список справ</h1>
            <TodoList todos={todos} toggleTodo={toggleTodo} />
            <TodoForm addTodo={addTodo} />
        </div>
    );
}

export default App
