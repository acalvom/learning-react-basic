import React from "react";
import Saludo from "./components/Saludo";
import Comentario from "./components/Comentario";

function App() {
    const paula = {
        nombre: 'Paula',
        imagen: 'https://via.placeholder.com/120',
        comentario: 'Hola me llamo Paula'
    }

    const jose = {
        nombre: 'Jose',
        imagen: 'https://via.placeholder.com/120',
        comentario: 'Hola me llamo Jose'
    }
    return (
        <div className="container mt-5">
            <Saludo persona="Andrea"/><br/>
            <Saludo persona="Carlos"/><br/>
            <Comentario persona={paula}/><br/>
            <Comentario persona={jose}/><br/>
        </div>
    );
}

export default App;
