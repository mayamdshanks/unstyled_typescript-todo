import React from "react";
import Todo from "../Model/model";
const Todos: React.FC<{ item: Todo[] }> = (props) => {
  return (
    <div>
      {props.item.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </div>
  );
};

export default Todos;
