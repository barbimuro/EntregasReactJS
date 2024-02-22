import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/navBar'
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner'

function App() {
return (
  <div className='App'>
      <NavBar/>
      <ItemListConteiner saludo={'Disfruten una partecita de mi'} />
  </div>
) 
}

export default App
