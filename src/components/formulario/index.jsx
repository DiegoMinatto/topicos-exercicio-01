import React, { useState, useEffect} from "react";



function Formulario(props) {

    const [campo, setDadoCampo] = useState('');

    const setaValorCampo = () => {
      props.setListaItems([...props.listaItems, ...[campo] ]);
      setDadoCampo('');
    }

    return (
        <form className="form-add-item" action="#" method="post">
        <fieldset>
          <div className="form-group mb-3">
            <label htmlFor="item">Adicionar Novo Item na Lista:</label>
            <input type="text" value={campo} onChange={(evt) => {setDadoCampo(evt.target.value)}} className="form-control" id="item" />
          </div>
          <button type="submit" onClick={(e) => {e.preventDefault(); setaValorCampo();}} className="btn btn-primary">
            Adicionar
          </button>
        </fieldset>
      </form>
    );
  }
  
  export default Formulario;
  