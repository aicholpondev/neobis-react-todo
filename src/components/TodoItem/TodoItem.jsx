import TodoItem from "../TodoItem/TodoItem.jsx"

export default function TodoList(props){
    console.log(props.array)

    return(
        <section className="postList">
            {
                props.array.map((el,idx) =>(
                    <TodoItem post={el} number={idx +1} remove={props.remove}/>

                ))
            }
        </section>
    )
}