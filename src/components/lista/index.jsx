function Lista(props) {
    return (
        <div className="lista-compras-container">
        <ul className="lista-items">
          {props.listaItems.map((vlr) => {
            return <li>{vlr}</li>
          })}
        </ul>
      </div>
    );
  }
  
  export default Lista;
  