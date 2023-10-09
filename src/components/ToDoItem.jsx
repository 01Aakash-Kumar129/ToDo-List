import React, { useState } from "react";

function ToDoIteam(props) {
  const [isDone, setisDone] = useState(false);

  function handleClick() {
    setisDone((preValue) => {
      return !preValue;
    });
  }

  return (
    <div onClick={handleClick}>
      <li style={{ textDecoration: isDone ? "line-through" : "none" }}>
        {props.text}
      </li>
    </div>
  );
}
export default ToDoIteam;
