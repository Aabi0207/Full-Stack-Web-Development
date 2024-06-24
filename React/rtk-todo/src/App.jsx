import Form from "./components/Form";
import Item from "./components/Item";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const todos = useSelector((state) => state.todos);

  return (
    <div className=" bg-slate-800 w-full text-white flex flex-col items-center justify-center h-screen">
      <div className="mb-10">
        <Form />
      </div>
      <div className="flex flex-col space-y-3">
        {todos.map((item) => {
          return <Item todo={item} />;
        })}
      </div>
    </div>
  );
}

export default App;
