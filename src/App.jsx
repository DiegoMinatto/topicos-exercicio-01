import React, { useState, useEffect} from "react";
import "./App.css";
import Lista from './components/lista'
import Formulario from './components/formulario'

function App() {

  const [listaItems, setListaItems] = useState([]);

  const setValor = (valor) => {
    
  }

  return (
    <div className="App">
      <header>
        <h2>Lista de Compras:</h2>
      </header>
      <Lista  listaItems={listaItems}/>
      <Formulario listaItems={listaItems} setListaItems={setListaItems} />
    </div>
  );

}

export default App;