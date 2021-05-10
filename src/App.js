import React from "react";
import Contador from "./components/Contador";
import Jsx from "./components/Jsx";
import Lista from "./components/Lista";
import Formulario from "./components/Formulario";
import FormHook from "./components/FormHook";

function App() {
    return (
        <div className="container mt-5">
            <Contador/><br/><br/><br/>
            <Jsx/><br/><br/><br/>
            <Lista/><br/><br/>
            <Formulario/><br/><br/>
            <FormHook/><br/><br/>
        </div>
    );
}

export default App;
