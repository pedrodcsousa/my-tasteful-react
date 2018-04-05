import React from "react";
import ReactDOM from "react-dom";

// import './style.sass';

const App = () => (
    <div>
        <h1>Hello, world!</h1>
        <h2>Se aparecer uma imagem em baixo é porque o Nuno 'El Coxo' é cona.</h2>
        <img src={"http://www.gazetadopovo.com.br/agronegocio/ra/media/Pub/GP/p4/2017/11/13/Agronegocio/Imagens/Vivo/Wagyu.jpg"}/>
    </div>
);

ReactDOM.render(<App />, document.getElementById("root"));