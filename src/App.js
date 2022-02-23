import React, { useState } from "react";
import Form from "./form";
import Filter from "./filter";
import Tasks from "./tasks";
import './App.css';
function App() {
  const [filter, setFilter] = useState("All");
  const [newId,setNewId]=useState(3)
  const [task, setTask] = useState([{
    id:1,
    name:"jogging",
    done:false,
},
{
    id:2,
    name:"studying",
    done:true,
}]);
const formSubmit=(value)=>{
  const newtask={
    id:newId,
    name:value,
    done:false,
  }
  setTask([...task,newtask])
  setNewId(newId+1)
}
const oncheckhandler=((id,checked)=>{
  setTask(task.map(item=>{
    return item.id===id? {...item,done:checked}:item
  })
)})
const onfilterchange=(value)=>{
  setFilter(value)
}
const filtertask=()=>{
    if(filter==="Active"){
      return (task.filter(item=>item.done===false))
    }else if(filter==="Completed"){
      return (task.filter(item=>item.done===true))
    }else return task
}
const deletetask=(id)=>{
  setTask( task.filter(item=>{return item.id !== id}))
}
  return (
    <div className="container">
      <h1 className="head">To Do List</h1>
      <div className="row">
        <div className="col-md-12">
          <div className="card card-white">
            <div className="card-body">
              <Form onSubmit={formSubmit} />
              <Filter onfilterchange={onfilterchange} />
              <Tasks tasks={filtertask()} oncheckhandler={oncheckhandler} deletetask={deletetask}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
