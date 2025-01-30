import Header from "./app/header/Header"
import { useState } from 'react'
import './App.css'
import ListaPeliculas from "./app/listapeliculas/ListaPeliculas";

function App() {
  const [index, setIndex] = useState(0);

  const changeIndex = (ind) => {
    setIndex(ind);
  }

  if(index === 1){
    return (
    <>
    <Header changeIndex={changeIndex}/>
    <h1>Agregar película</h1>
    </>
  )
  }

  return (
    <>
    <Header changeIndex={changeIndex}/>
    <ListaPeliculas />
    </>
  )
  
}

export default App
