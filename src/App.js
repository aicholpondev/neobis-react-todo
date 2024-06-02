import {useState} from "react";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/Todolist";

export default function App(){

    const [posts,setPosts] =useState([])
    // function addNewTask(data){
    //     setPosts([...posts,data])
    // }
    //
    // function removeTask(data){
    //     setPosts(posts.filter(el =>el.id !== data.id))
    // }


    return (
        <>
            <div className="container">
                <h1 className="title">  REACT TODO-LIST</h1>

                {/*<TodoForm create={addNewTask}/>*/}
                {/*<TodoList array={posts} remove={removeTask}/>*/}
            </div>
        </>
    );
}
