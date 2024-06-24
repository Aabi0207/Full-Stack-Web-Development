import React, { useState } from "react";

function Item({}) {
  const todo = { id: 1, todo: "What is your name", completed: false };
  const [tudoMsg, setTodoMsg] = useState("This is the first todo")
  const [isTodoEditable, setIsTodoEditable] = useState(false)

  return (
    <div
      className="w-[60vw] rounded-md px-3 py-1 flex justify-between h-10"
      style={{ backgroundColor: todo.completed ? "#e6e6fa" : "#e6fae6" }}
    >
      <div className="right flex space-x-3">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={!todo.completed}
          className="cursor-pointer"
        />
        <input
          type="text"
          className={`text-black text-lg font-semibold outline-none 
            ${todo.completed?"bg-[#e6e6fa] line-through": "bg-[#e6fae6]"}`}
          value={tudoMsg}
          onChange={(e) => e.target.value}
          readOnly={!isTodoEditable}
        />
      </div>
      <div className="left flex space-x-4">
        <button className="bg-white shadow-lg rounded-xl px-2">
            {isTodoEditable?"📁":"🖋️"}
        </button>
        <button className="bg-white shadow-lg rounded-xl px-2">
            ❌
        </button>
      </div>
    </div>
  );
}

export default Item