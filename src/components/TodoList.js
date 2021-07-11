import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {
  const handleClick = () => {
    props.clearCompleted();
  };
  return (
    <div>
      <h1>My To Do List</h1>
      {props.list.map((item) => (
        <Todo toggleItem={props.toggleItem} key={item.id} item={item} />
      ))}
      <button onClick={handleClick}>Clear</button>
    </div>
  );
};

export default TodoList;