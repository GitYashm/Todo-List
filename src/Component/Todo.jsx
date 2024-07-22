import React from "react";

const Todo = (props) => {
  return (
    <div className="listitem">
      <li className="list-item">
        {props.item}
        <i
          className="fa-solid fa-trash icon-delete"
          onClick={(e) => {
            props.deleteListItem(props.index);
          }}
        ></i>
      </li>
    </div>
  );
};

export default Todo;
