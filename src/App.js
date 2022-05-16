import React, { useState } from 'react';
import './App.css';
import Stu from './place.json';

function App() {
  const[details,Setdetails]=useState("");
  return (
    <div>
      <center>
      <h2>Stud</h2>
      <input  type={"text"} value={details} onChange={(text)=>Setdetails(text.target.value)}/>
      {Stu.filter(txt=>txt.Name.includes(details)).map((txt)=><h4>{txt.Name}</h4>)}</center>
    </div>
  );
}

export default App;
