import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [count, setcount] = useState(1);
  const increment = () =>{
    setcount(count + 1);
  }
  const decrement = () =>{
    if (count > 1){
    setcount(count - 1);
    }
  }
  const reset = () =>{
    setcount(1);
  }
  return (
   <>
   <h1 className='text-center m-5'>{count}</h1>
   <div className='m-3 p-1 justify-content-md-center d-flex'>
    <button className='btn btn-success ms-3 btn-lg' onClick={increment} >Increment</button>
    <button className='btn btn-warning ms-3 text-white btn-lg' onClick={reset}>Reset</button>
    <button className='btn btn-danger ms-3 btn-lg' onClick={decrement}>Decrement</button>
   </div>
   </>
  );
}

export default App;
