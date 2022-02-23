import React, { useState } from "react";

export default function Filter({onfilterchange}) {
  const filters = ["All", "Active", "Completed"];
  const click = (current) => {
        onfilterchange(current)
  }
  return (
    <ul class="nav nav-pills todo-nav">
      {filters.map((filter) => (
        <li
          key={filter}
          role="presentation"
          onClick={() => click(filter)}
          className="nav-item all-task active"
        >
          <a className="nav-link" style={{cursor:"pointer"}}>
              {filter}
          </a>
        </li>
      ))}
    </ul>
  );
}
