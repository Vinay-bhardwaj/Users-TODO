import React from "react";
import "./user-card.styles.css"
//import { Todolists } from "../todolists/todolist";
import { Task } from "../userlist/userslist";

export const CardList = (props) => {
    let userid ;
    let taskarr = [];
    for(const key in props.user){
        userid = key;
        taskarr = props.user[key];
    }
    return (
        <div className="card-list">
            <h2 align = "center">user id :{userid}</h2><hr></hr>
            {
                taskarr.map((user)=>{
                    return(<Task user={user}></Task>)
                })
            }
        </div>
    )
}