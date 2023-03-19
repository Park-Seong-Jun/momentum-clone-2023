import { useState } from "react";
import styles from "../App.module.css"


function Todo() {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);
    const [active,setActive] = useState(false);
    function onTyped(event) {
        setTodo(event.target.value);
    }
    function onSubmitted(event){
        event.preventDefault();
        if(todo === ""){
        return
        }
        setTodos((currentArray) =>[todo,...currentArray]);
        setTodo("")
    }
    function onClick (){
        setActive((current)=> !current)
    }


    function InputTodos(){
        return(
            <div className={styles.todo_input}>
                <form onSubmit={onSubmitted}>
                    <input onChange={onTyped} value={todo} placeholder="Input your to do!"/>
                </form>
                <hr/>
                <ul>
                    {todos.map((item,index)=><li key={index}>{item}</li>)}
                </ul>
            </div>
            
        )
    }
    return (
        <div>

            
            <h1 className={styles.todo} onClick={onClick}>Todo{active ?<InputTodos/> : null}</h1>
            
        </div>
  );
}

export default Todo;