import "../../style/PostForm/PostForm.css"
export default function PostForm({addTodo,inputValue,setInputValue, category, setCategory}){
    function handleSubmit(e) {
        e.preventDefault();

        console.log(inputValue);
        if (inputValue !== "") {
            addTodo();
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>

                <p className="sub-title">Whats on your todo list?</p>

                <label className="input__activity">
                    <input
                        className="input-box"
                        type="text"
                        placeholder="e.g get a milk"
                        value={inputValue}
                        onChange={(e) => {
                            setInputValue(e.target.value);
                        }}
                    />
                </label>

                <div className="todo__category">
                    <p className="sub-title">Pick a category</p>
                    <div className="radio-btn__wrapper">
                        <label className="radio-btn">
                            <input
                                className="radio-category radio"
                                type="radio"
                                name="category"
                                checked={category === "business"}
                                onChange={(e) => setCategory("business")}
                            />
                            <span className="business radio"></span>
                            <p>Business</p>
                        </label>
                        <label className="radio-btn">
                            <input
                                className="radio-category radio"
                                type="radio"
                                name="category"
                                checked={category === "personal"}
                                onChange={(e) => setCategory("personal")}
                            />
                            <span className="personal radio"></span>
                            <p>Personal</p>
                        </label>
                    </div>
                </div>
                <button className="add-todo__btn" onClick={addTodo}>
                    Add todo
                </button>
            </form>
        </div>
    )
}