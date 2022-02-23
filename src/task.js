import React, { useState } from "react";

export default function Task({ name,id, done,oncheckhandler,deletetask }) {
  return (
    <div className={("todo-item" + (done ? " complete" : ""))}>
      <div className="checker">
        <span className="">
          <input type="checkbox" checked={done} onChange={((e)=> oncheckhandler(id,e.target.checked))}/>
        </span>
        </div>
        <span>{name}
        </span>
        <button style={{float: "right"}}onClick={()=>deletetask(id)}>x</button>
      </div>
  );
}
