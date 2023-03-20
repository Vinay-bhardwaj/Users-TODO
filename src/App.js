import React from 'react';
import { Component } from 'react';
import './App.css';
//import { CardList } from './Components/usercard/usercard';
import { Todolist } from './Components/todolists/todolist';


class App extends Component {
  constructor(){
    super();
    this.state = {
      
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(userTodo => {
                //debugger;
                let stateCopy = {}
                userTodo.forEach(utd => {
                    //debugger;
                    if (stateCopy.hasOwnProperty(utd.userId)) {
                        stateCopy[utd.userId].push(utd);
                        //this.state[utd.userId].push(utd);
                    }
                    else {
                        stateCopy[utd.userId] = [utd];
                        //this.state[utd.userId] = [utd];
                    }
                });
                this.setState(stateCopy);
                console.log(this.state);
            });

  }


  
  render(){
   // console.log(this.state)
    return(
      <div >
        <div align = "center"></div>
        <div styles = "backgroundcolor : rgb(40, 136, 112)">
          <h1 align="center">TO-DO-LIST</h1>
        </div>
        <Todolist userTodo={this.state}/>
      </div>
    )
  }
}


export default App;


// function App() {
//   return (
//     <div className="App">
//       <div>hello..</div>
//     </div>
//   );
// }


  // componentDidMount(){
  //   fetch('https://jsonplaceholder.typicode.com/todos')
  //       .then(response=>response.json())
  //       .then(userTodo => {
  //           userTodo.forEach(utd => {
  //               if(this.state.hasOwnProperty(utd.userId)){
  //                   this.state[utd.userId].push(utd);
  //               }
  //               else{
  //                 // eslint-disable-next-line
  //                   this.state[utd.userId] = [utd];
  //               }
  //               return this.state;
  //           });
  //           console.log(this.state);
  //       })
  //       console.log(this.state);

  // }
  
  // componentDidMount(){
  //   fetch('https://jsonplaceholder.typicode.com/todos').then(response => response.json())
  //     .then(users =>{
  //       users.forEach(arr=>{
  //         if(this.state.hasOwnProperty(arr.userId)){
  //           this.state[arr.userId].push(arr)
  //         }
  //         else{
  //           // eslint-disable-next-line
  //           this.state[arr.userId] = [arr]
  //         }
  //         return this.state
  //       })
  //     console.log(this.state)
  //   })
  // }

// componentDidMount(){
//   fetch('https://jsonplaceholder.typicode.com/todos').then(Response=>{
//     return Response.json()}).then(users=>{
//       console.log(this.state.users)
//       //this.setState({users : users})
//       users.forEach((arr)=>{
//         if(this.state.hasOwnProperty(this.state, arr.userId)){
//           this.state[arr.userId].push(arr)
//         }
//         else{
//           this.state[arr.userId] = [arr]
//         }
//         return this.state
      
//       });
//       console.log(this.state)
      
//     });
    
//   }