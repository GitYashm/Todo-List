import React, { useState } from "react";

const Addtask = (props) => {
  const [inputText, setinputText] = useState(" ");
  return (
    <div className="mainadd">
      <h1>Add Task</h1>
      <div className="add">
        <input
          type="text"
          value={inputText}
          onChange={(e) => {
            setinputText(e.target.value);
          }}
        />
        <button
          onClick={() => {
            props.addList(inputText);
            setinputText("");
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Addtask;
