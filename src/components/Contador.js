import React, {useState, Fragment} from "react";

const Contador = () => {
    // En React se utilizan los estados para modificar los elementos
    const [numero, setNumero] = useState(0);
    const Aumentar = () => {
        setNumero(numero + 1)
    }
    return (
        /*
        Fragment es una propiedad de React que sustituye a div ya que este es un elemento de html que tienen
        funcionalidad y que no estamos usando
         */
        <Fragment>
            <h2>El contador se encuentra a {numero}</h2>
            <button onClick={Aumentar}>Aumentar</button>
        </Fragment>
    );
}

export default Contador;
