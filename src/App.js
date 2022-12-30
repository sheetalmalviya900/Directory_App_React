// import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import Reterive from './Reterive';
import Add from "./Add"
function App() {
  const [flag, SetFlag] = useState(false)
  return (
    <div>
      <div id="head">
        <h1>Sheetal's Directory App</h1>
      </div>
      <div id="option">
        <button id='add' onClick={() => {
          SetFlag(false)
        }}>Add New Person</button>
        <button id="add" onClick={() => {
          SetFlag(true)
        }}>Retrieve Information</button>
        {
          flag ? <Reterive /> : <Add />
        }
      </div>
    </div>
  )

}
export default App;
