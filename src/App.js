import { useState } from "react";
import './App.css'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Card from "./components/Card";

function App() {
  const [count, setCount]= useState(0)
  return (
    <div className="App">
      <Navbar/> 
      <div className="cards">
        <Card title="Card 1" desc="the desc of Card 1"/>
        <Card title="Card 2" desc="the desc of Card 2"/>
        <Card title="Card 3" desc="the desc of Card 3"/>
        <Card title="Card 4" desc="the desc of Card 4"/>
      </div>
      {count}
      <button onClick={()=>{ setCount(count+1)}}>click Me</button>
      <Footer/>
    </div>
  );
}

export default App;
