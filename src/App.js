import React, { useEffect, useState } from "react";
import axios from 'axios';

//styles
import './App.css';




function App() {

  const [quote , setQuote] = useState([])

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
     const req = await axios.get('https://api.adviceslip.com/advice')
     const res = await req.data.slip.advice
     setQuote(res)

}


  

  return (
    <div className="container">
      <div className="card">
        <h3 className="heading">{quote}</h3>
        <button className="btn" onClick={() => getData()}>Give me a Quote</button>
      </div>
    </div>
  );
}

export default App;
