import React, {useState, Fragment} from "react";

const Lista = () => {
    const [arrayNumero, setArrayNumero] = useState([1, 2, 3, 4, 5]);

    return (
        <Fragment>
            <h2>Lista de números</h2>
            {
                /* Cuando se quieren obtener los datos de un array tenemos que pasarle
                el índice a cada etiqueta html: key=index*/
                arrayNumero.map((num, index) =>
                    <ul key={index}>Número {num} - Índice {index}</ul>
                )
            }
        </Fragment>
    );
}

export default Lista;
