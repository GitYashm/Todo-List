import Addtask from "./Component/Addtask";
import Todo from "./Component/Todo";
import React, { useState } from "react";
import "./index.css";
export default function App() {
  const [listTodo, setListTodo] = useState([]);
  let addList = (inputText) => {
    if (inputText !== " ") setListTodo([...listTodo, inputText]);
  };
  const deleteItem = (key) => {
    let newTodoList = [...listTodo];
    newTodoList.splice(key, 1);
    setListTodo([...newTodoList]);
  };
  return (
    <div className="main-container">
      <Addtask addList={addList} />
      <h1>Todo</h1>
      {listTodo.map((listItem, i) => {
        return (
          <Todo key={i} index={i} item={listItem} deleteListItem={deleteItem} />
        );
      })}
    </div>
  );
}
