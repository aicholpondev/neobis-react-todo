import React from "react";
import PostList from "../PostList/PostList";
import "../../style/PostTop/PostTop.css"


export default function TodoCreate({ todos, setInputValue, deleteTodo, completeTodo, editTodo}){


    return (
        <ul id="todo-list" className="list">
            <p className="l1" >Todo List:</p>
            {todos
                .map((todos) => (
                    <PostList
                        key={todos.id}
                        todos={todos}
                        setInputValue={setInputValue}
                        deleteTodo={deleteTodo}
                        completeTodo ={completeTodo}
                        editTodo = {editTodo}
                    />
                ))}
        </ul>
    );
}