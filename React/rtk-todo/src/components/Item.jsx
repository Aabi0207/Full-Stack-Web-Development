import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeTodo, updateTodo, ToggleEvent } from "../features/todoSlices";

function Item({ todo }) {
  const [tudoMsg, setTodoMsg] = useState(todo.text);
  const [isTodoEditable, setIsTodoEditable] = useState(false);

  const dispatch = useDispatch();

  return (
    <div
      className="w-[60vw] rounded-md px-3 py-1 flex justify-between h-10"
      style={{ backgroundColor: todo.completed ? "#e6e6fa" : "#e6fae6" }}
    >
      <div className="right flex space-x-3">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => dispatch(ToggleEvent(todo.id))}
          className="cursor-pointer"
        />
        <input
          type="text"
          className={`text-black text-lg font-semibold outline-none w-[45vw] 
            ${todo.completed ? "bg-[#e6e6fa] line-through" : "bg-[#e6fae6]"}`}
          value={tudoMsg}
          onChange={(e) => setTodoMsg(e.target.value)}
          readOnly={!isTodoEditable}
        />
      </div>
      <div className="left flex space-x-4">
        <button
          className="bg-white shadow-lg rounded-xl px-2"
          onClick={() => setIsTodoEditable((prev) => !prev)}
        >
          {isTodoEditable ? "📁" : "🖋️"}
        </button>
        <button className="bg-white shadow-lg rounded-xl px-2" onClick={() => dispatch(removeTodo(todo.id))}>❌</button>
      </div>
    </div>
  );
}

export default Item;
