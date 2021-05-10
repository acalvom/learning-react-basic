import React, {Fragment} from 'react';
import Avatar from "./Avatar";
import Fecha from "./Fecha";

const Comentario = ({persona}) => {
    return (
        <Fragment>
            <h2>Comentarios</h2>
            <div className="d-flex align-items-center">
                <Avatar imagen={persona.imagen}/>
                <div className="flex-grow-1 ms-3">
                    <h4>{persona.nombre}</h4>
                    {persona.comentario}
                    <Fecha fecha={persona.fecha}/>
                </div>
            </div>
        </Fragment>
    );
};

export default Comentario;

