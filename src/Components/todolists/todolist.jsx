import React from "react";
import './todolist.styles.css'
import { CardList } from "../usercard/usercard";

export const Todolist = (props) => {
    let copy = Object.assign({},props.userTodo);
    let todo =[];
    for(const key in copy){
        let newObj = {};
        newObj[key] = copy[key];
        todo.push(newObj)
    }
    console.log(todo)
    return (
        <div>
            {
                todo.map((user)=>{
                    return (<CardList key={user.key} user = {user}/>)
                })
            }
        </div>
    )
 }













// export const Todolists = props => {
//     return (
//         <div className="todo-list">
//             <h2>UserId :{props.userTodo.userId}</h2>
//             <p>id :{props.userTodo.id}</p>
//             <p>Title :{props.userTodo.title}</p>
//             <p>Compeleted :</p>
//             <div className = "Task-Compelete-or-not" style={{float : "right"}}>
//                 <button disabled = {props.userTodo.completed}>✖</button>
//             </div>
//             <div className = "Task-Compelete-or-not" style={{float : "left"}}>
//             <button disabled = {!props.userTodo.completed}>✔</button>
//             </div>
//         </div>
//     )
// };