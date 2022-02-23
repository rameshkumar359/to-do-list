import React, { useState } from "react";
import Task from "./task";
export default function Tasks({ tasks, oncheckhandler,deletetask }) {
  return (
    <div className="todo-list">
      {tasks.length>0 ? tasks.map((item) => {
        return (
          <Task
            key={item.id}
            name={item.name}
            done={item.done}
            oncheckhandler={oncheckhandler}
            id={item.id}
            deletetask={deletetask}
          />
        );
      }) :<div>Nothing to show</div> }
    </div>
  );
}
