import React, { useState } from "react";

function Form() {
  const [input, setInput] = useState("");

  return (
    <form className="w-[60vw] h-10">
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
