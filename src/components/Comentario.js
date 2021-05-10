import React, {Fragment} from 'react';

const Comentario = ({persona}) => { // También valdría (props) y acceder con props.persona.nombre
    return (
        <Fragment>
            <h2>Comentarios</h2>
            <div className="d-flex align-items-center">
                <div className="flex-shrink-0">
                    <img className="mr-3" src={persona.imagen} alt="Cabecera"/>
                </div>
                <div className="flex-grow-1 ms-3">
                    <h4>{persona.nombre}</h4>
                    {persona.comentario}
                </div>
            </div>

        </Fragment>
    );
};

export default Comentario;

