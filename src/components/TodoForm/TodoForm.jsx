import React, { useState } from "react";
export default function TodoForm(props) {
    const [title, setTitle] = useState('');

    function add(event) {
        event.preventDefault(); // Остановить действие по умолчанию отправки формы
        if (title.trim().length) {
            const newTask = {
                id: Date.now(),
                title: title
            };
            props.create(newTask);
            setTitle('');
        } else {
            alert("Input ПУСТОЙ!");
        }
    }

    return (
        <div>
            <form id="todo-form" onSubmit={add}>
                <div className="todo-title">
                    <p className="todo-text">What's up, </p>
                    <input className="user" placeholder="Name here" />
                </div>

                <div className="task-input">
                    <p className="task-title">CREATE A TODO</p>
                    <p className="blur-txt">What's on your todo list?</p>
                    <input type="text" name="task" placeholder="e.g get a milk" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>

                <div className="category-general">
                    <p className="blur-txt">Pick a category</p>
                    <div className="category">
                        <div className="category-item">
                            <label> <input type="radio" className="business" name="category-option" />
                                <p>Business</p></label>
                        </div>
                        <div className="category-item">
                            <label> <input type="radio" className="personal" name="category-option" />
                                <p>Personal</p></label>
                        </div>
                    </div>
                </div>
                <button className="submit" type="submit" id="submit">Add todo</button>
            </form>
        </div>
    );
}

