import React, {Fragment} from 'react';

const Avatar = (props) => {
    return (
        <Fragment>
            <div className="flex-grow-0">
                <img className="mr-3" src={props.imagen} alt="Cabecera"/>
            </div>
        </Fragment>
    );
};

export default Avatar;
