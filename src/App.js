import React from "react";
import Saludo from "./components/Saludo";

function App() {
    return (
        <div className="container mt-5">
            <Saludo persona="Andrea"/><br/>
            <Saludo persona="Carlos"/><br/><br/>
        </div>
    );
}

export default App;
