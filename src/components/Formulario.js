import React, {useState, Fragment} from "react";

const Formulario = () => {

    /* 1-Crear el formulario CON LA ETIQUETA name
       2-En useState pasar un objeto con los nombres de la etiqueta name vacíos, que deben coincidir con los campos del formulario
       3-En los campos del input, añadir el onChange con una función que maneje el evento: event.target.value
       4-En la función onChange dar el valor a los datos con useState concatenando a lo que ya hay en el estado inicial
       5-
     */

    const [datos, setDatos] = useState({ // En el formulario, los datos recogidos son objetos
        nombre: '',
        apellido: '',
        email: ''
    });
    const EnviarFormulario = () => {
        console.log('Datos formulario')
    }
    const ControladorCambios = (event) => {
        console.log(event.target.name + ' ' + event.target.value)
        setDatos({ // Como los datos del form van en un objeto se ponen {}
            ...datos,   // Igual que un array, para no perder los datos, concatenamos con lo anterior
            [event.target.name]: event.target.value // Esto es notación propia de EcmaScript 6
        })
    }

    return (
        <Fragment>
            <h2>Formulario</h2>
            <form>
                <div className="row">
                    <div className="col-md-3">
                        <input type="text"
                               className="form-control"
                               name="nombre" // El name es fundamental para recoger los datos del formulario
                               placeholder="Nombre"
                               onChange={ControladorCambios}/>
                    </div>
                    <div className="col-md-3">
                        <input type="text"
                               className="form-control"
                               name="apellido"
                               placeholder="Apellido"
                               onChange={ControladorCambios}/>
                    </div>
                    <div className="col-md-3">
                        <input type="email"
                               className="form-control"
                               name="email"
                               placeholder="Email"
                               onChange={ControladorCambios}/>
                    </div>
                    <div className="col-md-3">
                        <button onClick={EnviarFormulario} type="submit" className="btn btn-primary">Enviar</button>
                    </div>
                </div>
            </form>
        </Fragment>
    );
}

export default Formulario;
