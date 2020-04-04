import React, { useState } from 'react';

export default function Header(props) {
  //Retorno Array [counter, setCounter()]
  const [counter, setCounter] = useState(0)

  function increment() {
    setCounter(counter + 1)
  }
  
  return (
    <header>
      <h1>Contador: {counter}</h1>
      <button onClick={increment}>Incrementar</button>
    </header>
  );
}
