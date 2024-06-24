import React, { useState } from "react";
import {useDispatch} from 'react-redux'
import { addTodo } from "../features/todoSlices";

function Form() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch()

  const addTodoHandler = (e) => {
    e.preventDefault()
    dispatch(addTodo(input))
    setInput("")
  }

  return (
    <form className="w-[60vw] h-10" onSubmit={addTodoHandler}>
      <input
        className="bg-white outline-none rounded-l-md w-[55vw] h-full px-5 text-black"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="write todo"
      />
      <button type="submit" className="bg-sky-400 hover:bg-sky-800 rounded-r-md px-3 h-full">
        ADD
      </button>
    </form>
  );
}

export default Form
