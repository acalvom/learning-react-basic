import React from "react";
import Contador from "./components/Contador";
import Jsx from "./components/Jsx";
import Lista from "./components/Lista";
import Formulario from "./components/Formulario";

function App() {
  return (
    <div className="container mt-5">
      <Contador/><br/><br/><br/>
      <Jsx/><br/><br/>
      <Lista/><br/><br/>
      <Formulario/><br/><br/>
    </div>
  );
}

export default App;
