import React, {Fragment, useState} from 'react'
import {useForm} from 'react-hook-form'

const FormHook = () => {

    /* React Form Hook - Versión 7
     * 1-En el onSubmit del formulario hay que pasar la función handleSubmit conn la función onSubmit que creemos
     * 2-En el input hay que añadir el objeto register con el campo "name" y los requisitos de validación
     * 3-Para hacer el control de errores se accede al tipo de requisito
     * 4-Asignar los datos del formulario al estado con setDatos
     */

    const [datos, setDatos] = useState({
        nombre: '',
        telefono: ''
    });
    const {register, formState: {errors}, handleSubmit} = useForm();
    const onSubmit = (form, event) => {
        setDatos(form)
        event.target.reset();  // Para limpiar el formulario
    }

    return (
        <Fragment>
            <h2>Formulario con React From Hook</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-md-3">
                        <input className="form-control"
                               placeholder="Nombre"
                               {...register("nombre", {required: true, maxLength: 20})}/>
                        {errors.nombre && errors.nombre.type === "required" && <span>Campo obligatorio</span>}
                        {errors.nombre && errors.nombre.type === "maxLength" && <span>Max 20 caracteres</span>}
                    </div>
                    <div className="col-md-3">
                        <input className="form-control"
                               placeholder="Teléfono"
                               {...register("telefono", {required: true, minLength: 9, maxLength: 9})}/>
                        {errors.telefono && errors.telefono.type === "required" && <span>Campo obligatorio</span>}
                        {errors.telefono && errors.telefono.type === "minLength" && <span>9 caracteres</span>}
                        {errors.telefono && errors.telefono.type === "maxLength" && <span>9 caracteres</span>}
                    </div>
                    <div className="col-md-3">
                        <button type="submit" className="btn btn-primary">Enviar</button>
                    </div>
                </div>
                <div className="row my-3">
                    <h5>Tu nombre es {datos.nombre} y tu teléfono {datos.telefono}</h5>
                </div>
            </form>
        </Fragment>

    );
}

export default FormHook;
