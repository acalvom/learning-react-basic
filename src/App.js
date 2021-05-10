import React from "react";
import Comentario from "./components/Comentario";

function App() {
    const paula = {
        nombre: 'Paula',
        imagen: 'https://via.placeholder.com/120',
        comentario: 'Hola me llamo Paula',
        fecha: new Date().toDateString()
    }

    const jose = {
        nombre: 'Jose',
        imagen: 'https://via.placeholder.com/120',
        comentario: 'Hola me llamo Jose',
        fecha: new Date().toDateString()
    }
    return (
        <div className="container mt-5">
            <Comentario persona={paula}/><br/>
            <Comentario persona={jose}/><br/>
        </div>
    );
}

export default App;
