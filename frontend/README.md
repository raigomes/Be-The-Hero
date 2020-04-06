## Frontend

- Componente no React é uma função JS que retorna um HTML (JSX). O arquivo JS que define o componente sempre deve iniciar com letra maiúscula e o retorno sempre precisa ser uma tag HTML e suas filhas ou outro Componente;
- JSX (Javascript XML) é a integração do HTML no JS;
- Live reload é a característica que o React tem de atualizar o browser a cada atualização no JS;
- Propriedades (props) são os parâmetros passados para o componente. Pode ser representados como atributos ou de forma nativa, como é o caso do "children" (correspondente a todo o conteúdo passado dentro das tags do componente);
- State é uma propriedade que, quando alterada, gera uma nova renderização do componente;
- Por questão de performance, não é recomendado atualizar as variáveis diretamente. Esse é o conceito de Imutabilidade e, por isso, usamos o useState para manipular os estados (state);
- useState recebe o valor inicial do state e retorna um array com a variável e um método de atualização. 
- No exemplo do contador no componente Header, declaramos inicialmente useState(0) e os valores de array de retorno setam a variável counter e o método setCounter. O setCounter é utilizado no método increment que está no onClick do botão.

<pre>
    <code>
    import React, { useState } from 'react';

    export default function Header(props) {
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
    </code>
</pre>

- useEffect é o método onde você passa um callback que será executado após cada renderização.
- useHistory é o metodo do pacote 'react-router-dom' que manipula o histórico do navegador.
- useState, useEffect e useHistory são exemplos de hooks.