import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./Todo";
import Actor from "./Actor";
import Singer from "./Singer";

function App() {
  const actors = [
    "Sakib khan",
    "Shariful raj",
    "Jasim",
    "Rubel",
    "Salman shah",
  ];

  const singersAre = [
    {id: 1, name: 'Sir Mahfuzur Rahman', age: 58},
    {id: 2, name: 'Eva Rahman', age: 38},
    {id: 3, name: 'Shuvro Dev', age: 34},
    {id: 4, name: 'Pritom Saha', age: 28},
    {id: 5, name: 'Dr. Khalil Mia', age: 48},
  ]

  return (
    <>
      <h1>Vite + React</h1>
      {
        actors.map(acting => <Actor name={acting}></Actor>)
      }
      {
        singersAre.map(singer => <Singer singerGot={singer}></Singer>)
      }
      <br></br>
      <Todo task="Learn React" isDone={true}></Todo>
      <Todo task="Learn Core concept" isDone={false}></Todo>
      <Todo task="Try JSX" isDone={true}></Todo>
      {/* <Person></Person> */}
      <Iam></Iam>
      <Momin type="JavaScript" front="CSS"></Momin>
    </>
  );
}
function Iam() {
  const age = 24;
  const details = {
    home: "Ghatail",
    Income: 45000,
    status: "Unmarried",
  };
  return (
    <h1>
      I am {age} i'm in {details.home} and my income is {details.Income}
    </h1>
  );
}
// function Person(){
//   return <h1>I am Agun</h1>
// }
function Momin(props) {
  console.log(props);
  const styleHere = {
    backgroundColor: "white",
    color: "purple",
    margin: "20px",
    padding: "20px",
    border: "2px solid purple",
    borderRadius: "20px",
  };
  return (
    <div style={styleHere}>
      <h3>Developing</h3>
      <h5>
        Coding: {props.type} style: {props.front}
      </h5>
    </div>
  );
}

export default App;
