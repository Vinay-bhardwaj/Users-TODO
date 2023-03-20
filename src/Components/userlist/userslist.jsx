import React from "react";
import "./userlist.css"

export const Task = (props) => {
    return (
        <div className='task'>
            <div>Task Id : {props.user['id']}</div> 
            <div>Task: {props.user['title']}</div>
            <p>Compeleted :</p>
             <div style={{float : "right"}}>
                 <button disabled = {props.user["completed"]}>✖</button>
             </div>
             <div style={{float : "left"}}>
             <button disabled = {!props.user['completed']}>✔</button>
            <br></br>
            </div>
        </div>    
      )
}