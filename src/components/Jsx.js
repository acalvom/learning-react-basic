import React, {useState, Fragment} from "react";

const Jsx = () => {
    const [temperatura, setTemperatura] = useState(20);
    const Aumentar = () => {
        setTemperatura(temperatura + 1)
    }
    const Reducir = () => {
        setTemperatura(temperatura - 1)
    }
    return (
        <Fragment>
            <h2>¿Frío o calor? -- {temperatura} º</h2>
            <h3>{temperatura < 25 ? 'Frío' : 'Calor'}</h3>
            <button onClick={Aumentar}>Aumentar</button>
            <button onClick={Reducir}>Reducir</button>
        </Fragment>
    );
}

export default Jsx;
