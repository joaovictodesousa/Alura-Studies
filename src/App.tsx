import React from 'react';
import Formulario from './components/Fomulario';
import Lista from './components/Lista';

function App() {
  const nomes = [
    { nome: 'João' },
    { nome: 'João' },
    { nome: 'João' },
    { nome: 'João' }
  ];
  return (
    <div className="App">
      {/* "item" é apenas uma variavel */}
      {/* O ""index" na função map serve como o índice atual 
      do elemento sendo processado no array.   */}

      {nomes.map((item, index) => ( 
        <li key={index}>
          <h1>{item.nome}</h1>
          {/* O "item" subistitue o nomes, é no lugar do item pode colocar qualquer coisa */}
        </li>
      ))}
      <Formulario />
      <Lista />
    </div>
  );
}

export default App;
