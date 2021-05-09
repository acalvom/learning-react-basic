import React, {useState, Fragment} from "react";

const Lista = () => {
    const [arrayNumero, setArrayNumero] = useState([1, 2, 3, 4, 5]);
    const [numero, setNumero] = useState(arrayNumero.length + 1);

    const AgregarElemento = () => {
        setNumero(numero + 4); // Utilizamos hooks para modificar el valor de un elemento
        setArrayNumero([
            ...arrayNumero, // Para concatenar arrays se utilizan ...
            numero
        ])
    }

    return (
        <Fragment>
            <h2>Lista de números</h2>
            <button onClick={AgregarElemento}>Añadir</button>
            {
                /* Cuando se quieren obtener los datos de un array tenemos que pasar
                el índice a cada etiqueta html: key=index*/
                arrayNumero.map((num, index) =>
                    <ul key={index}>Número {num} - Índice {index}</ul>
                )
            }
        </Fragment>
    );
}

export default Lista;
