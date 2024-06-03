import React, { useState, useEffect } from "react";
import PostForm from "../PostForm/PostForm";
import PostTop from "../PostTop/PostTop";
import "../../style/PostCard/PostCard.css"
function PostCard() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [category, setCategory] = useState("personal");

    useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
        setTodos(savedTodos);
    }, []);

    const addTodo = () => {
        const newTodos = [
            ...todos,
            {
                id: Date.now(),
                todo: inputValue,
                category,
                done: false,
                editable: false,
            },
        ];
        setTodos(newTodos);
        localStorage.setItem("todos", JSON.stringify(newTodos));
        setInputValue("");
    };

    const deleteTodo = (id) => {
        const newTodos = todos.filter((todo) => todo.id !== id);
        setTodos(newTodos);
        localStorage.setItem("todos", JSON.stringify(newTodos));
    };

    const completeTodo = (id) => {
        const newTodos = todos.map((todo) =>
            todo.id === id ? { ...todo, done: !todo.done } : todo
        );
        setTodos(newTodos);
        localStorage.setItem("todos", JSON.stringify(newTodos));
    };

    const editTodo = (id, text) => {
        const newTodos = todos.map((todo) =>
            todo.id === id ? { ...todo, todo: text } : todo
        );
        setTodos(newTodos);
        localStorage.setItem("todos", JSON.stringify(newTodos));
    };

    return (
        <div className="todo">
            <div className="todo__container">
                <h1>
                    Whats up,
                    <input
                        className="todo__input"
                        type="text"
                        placeholder="name here..."
                    />
                </h1>

                <PostForm
                    addTodo={addTodo}
                    inputValue={inputValue}
                    setInputValue={setInputValue}
                    category={category}
                    setCategory={setCategory}
                />
            </div>

            <PostTop
                todos={todos}
                setInputValue={setInputValue}
                deleteTodo={deleteTodo}
                completeTodo={completeTodo}
                editTodo={editTodo}
            />
        </div>
    );
}

export default PostCard;