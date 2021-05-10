import React, {useState, Fragment} from "react";

const Formulario = () => {

    /* 1-Crear el formulario CON LA ETIQUETA name
       2-En useState pasar un objeto con los nombres de la etiqueta name vacíos, que deben coincidir con los campos del formulario
       3-En los campos del input, añadir el onChange con una función que maneje el evento: event.target.value
       4-En la función onChange dar el valor a los datos con useState concatenando a lo que ya hay en el estado inicial
       5-Añadir la función onSubmit para enviar los datos del formulario
     */

    const [datos, setDatos] = useState({ // En el formulario, los datos recogidos son objetos
        nombre: '',
        apellido: '',
        email: ''
    });
    const EnviarFormulario = (event) => {
        event.preventDefault(); // Para evitar el procesamiento automático del formulario que se recargue la página
        console.log(datos.nombre + ' ' + datos.apellido + ' ' + datos.email)
    }
    const ControladorCambios = (event) => {
        //console.log(event.target.name + ' ' + event.target.value)
        setDatos({ // Como los datos del form van en un objeto se ponen {}
            ...datos,   // Igual que un array, para no perder los datos, concatenamos con lo anterior
            [event.target.name]: event.target.value // Esto es notación propia de EcmaScript 6
        })
    }

    return (
        <Fragment>
            <h2>Formulario</h2>
            <form onSubmit={EnviarFormulario}>
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
                        <button type="submit" className="btn btn-primary">Enviar</button>
                    </div>
                </div>
                <div className="row my-3">
                    <h5>Tu nombre es {datos.nombre} {datos.apellido} y tu email {datos.email}</h5>
                </div>
            </form>
        </Fragment>
    );
}

export default Formulario;
