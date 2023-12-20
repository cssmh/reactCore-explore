// export default function Todo({task, isDone}){
//    if(isDone){
//     return <li>Finished: {task}</li>
//    }
//    else{
//     return <li>Work on: {task}</li>
//    }
// }

export default function Todo({ task, isDone }) {
  return <li> {isDone ? "Completed" : "Work on"} {task}</li>;
}