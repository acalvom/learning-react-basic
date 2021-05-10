import React, {Fragment} from "react";

// Uso de props para comunicar componentes
const Saludo = (props) => { // en props se reciben los datos enviados desde el otro componente
    return (
        <Fragment>
            <h2>Hola {props.persona}</h2>
        </Fragment>
    );
}

export default Saludo;

