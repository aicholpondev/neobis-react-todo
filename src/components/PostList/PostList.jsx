
import React, { useRef } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import "../../style/PostList/PostList.css"
export default function PostList({todos,deleteTodo, completeTodo, editTodo}){

    const inputRef = useRef();
    return (
        <li className={`${todos.done ? "completed" : ""} ${todos.category} `}>

            <label className="checkbox">
                <input
                    type="checkbox"
                    onChange={() => completeTodo(todos.id)}
                    checked={todos.done}
                />
            </label>
            <input
                className="input-text"
                value={todos.todo}
                ref={inputRef}
                onChange={(e) => editTodo(todos.id, e.target.value)}
            />
            <button className="edit-btn" onClick={() => inputRef.current.focus()}>
                <FaEdit />

            </button>
            <button className="delete-btn" onClick={() => deleteTodo(todos.id)}>
                <MdDelete />
            </button>
        </li>
    );
}