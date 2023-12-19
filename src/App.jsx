import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./Todo";

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <Todo task="Learn React" isDone={true}></Todo>
      <Todo task="Learn Core concept" isDone={false}></Todo>
      <Todo task="Try JSX" isDone={true}></Todo>
      {/* <Person></Person> */}
      <Iam></Iam>
      <Momin type="JavaScript" front="CSS"></Momin>
    </>
  );
}
function Iam(){
  const age = 24;
  const details = {
    home: 'Ghatail',
    Income: 45000,
    status: 'Unmarried'
  }
  return <h1>I am {age} i'm in {details.home} and my income is {details.Income}</h1>
}
// function Person(){ 
//   return <h1>I am Agun</h1>
// }
function Momin(props){
  console.log(props);
  const styleHere = {
    backgroundColor: 'white',
    color: 'purple',
    margin: '20px',
    padding: "20px",
    border: '2px solid purple',
    borderRadius: '20px'
  }
  return (
    <div style={styleHere}>
      <h3>Developing</h3>
      <h5>Coding: {props.type} style: {props.front}</h5>
    </div>
  )
}

export default App;