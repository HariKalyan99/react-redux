import './App.css';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const counter = useSelector((state) => state.counter)

  const dispatch = useDispatch();
  const increment = () => {
    dispatch({type: "INC"})
  }
  const decrement = () => {
    dispatch({type: "DEC"})
  }

  const addby  = () => {
    dispatch({
      type: "ADD",
      payload: 10
    })
  }
  
  const subBy  = () => {
    dispatch({
      type: "SUB",
      payload: 10
    })
  }

  const toggleDisplay = useSelector((state) => state.stopdisplay)

  const toggle = () => {
    dispatch({
      type: "TOGGLE"
    })
  }
  

  return (
    <div className="App">
      <h1>Counter App</h1>
      {!toggleDisplay && <h2>{counter}</h2>}
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={addby}>ADD + 10</button>
      <button onClick={subBy}>SUB - 10</button>
      <button onClick={toggle}>Stop Displaying Counter</button>
    </div>
  );
}

export default App;
