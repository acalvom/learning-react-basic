import React, {Fragment} from 'react';

const Fecha = (props) => {
    return (
        <Fragment>
            <div className="flex-grow-1 ms-1">
                {props.fecha}
            </div>
        </Fragment>
    );
};

export default Fecha;

