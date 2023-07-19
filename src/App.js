import "./App.css";
import React, { useRef, useState } from "react";
import Test from "./Test";
import Find from "./Find";

function App() {
  const inputRef = useRef();
  const inputRef2 = useRef();
  console.log(inputRef);

  const [state, setState] = useState(false);
  const [state2, setState2] = useState(false);
  const [input, setInput] = useState([]);
  const [array, setArray] = useState([]);
  const [tasks, setTasks] = useState([]);
  console.log(array);

  function handleSubmit(e) {
    e.preventDefault();
    const obj = {
      name: inputRef.current.value,
      age: inputRef2.current.value,
      id: Math.random().toString(),
    };
    inputRef.current.value = "";
    inputRef2.current.value = "";

    setInput((prev) => {
      return [...prev, obj];
    });
  }

  const dataTrue = () => {
    setState((prev) => !prev);
  };

  const dataTrue2 = () => {
    setState2((prev) => !prev);
  };

  const save = (id) => {
    console.log(id);
    let data = input.filter((el) => el.id !== id);
    setInput(data);
    const deleteItem = input.find((el) => el.id === id);

    setArray((prev) => [...prev, deleteItem]);
    setTasks((prev) => [...prev, deleteItem]);

  };

  return (
    <div className="App">
      <header>
        <h1>HomeWork</h1>
        <b>
          <h1>WELCOME</h1>
        </b>
        <button onClick={dataTrue} className="karzinka">
          Karzinka
        </button>
      </header>

      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} />
        <input type="text" ref={inputRef2} />
        <button type="submit">ADD</button>
      </form>
      {array.map((el) => {
        return( <>{state && <Find onSave={save} name={el.name} age={el.age} />}</>);
      })}
      {input.map((el) => {
        return (
          <>
            <Test
              onSave={save}
              key={el.id}
              id={el.id}
              name={el.name}
              age={el.age}
            />
          </>
        );
      })}
      {tasks.map((el) => {
        console.log(el);
        return(<>{state2 && <div><h1>{el.name}</h1> <h1>{el.age}</h1></div>}</>)
      })}
    </div>
  );
}

export default App;
