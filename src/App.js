import React  from 'react';

import './styles/home.css';

const  App = () => {
  const buttons = ['Bienvenido', 'Recicladores', 'Asociaciones', 'Super Usuario'];
  return (
    <div className="layout">
      <div> <h1>Conceptos Plasticos </h1></div>
      <div className="layout__menu">
        {
          buttons.map(btn => {
            return( <button key={btn} className="layout__button"> {btn} </button>)
          })
        }
      </div>
    </div>
  );
}

export default App;
