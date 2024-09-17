import {useState} from 'react'
import './App.css'

function App() {
  
  let[counter,setCounter] = useState(0);

  const addvalue=()=>{
    if(counter<20){
      //counter=counter+1;
      //setCounter(counter);

      setCounter(counter+1);


      //TO UNDERSTAND THIS SEE NOTES
      //setCounter(prevCounter => prevCounter+1);
      //setCounter(prevCounter => prevCounter+1);
      // setCounter(prevCounter => prevCounter+1);
      // setCounter(prevCounter => prevCounter+1);
    }
  }

  const removeValue=()=>{
    if(counter>0){
      setCounter(counter-1);
    }
  }

  return (
    <>
      <h1>Shambhavi Thakur</h1>
      <h2>Counter Value : {counter}</h2>

      <button onClick={addvalue}>Add Value</button>
      <br/>
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
