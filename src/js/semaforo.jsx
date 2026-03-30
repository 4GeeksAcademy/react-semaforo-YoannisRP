import React, { useState } from "react";

const Semaforo = () => {

    // Estado para saber qué luz está activa
    const [color, setColor] = useState("red");

    return (
        <div className="d-flex flex-column align-items-center mt-4">

            {/* LUZ ROJA */}
            <div
                className={"light red" + (color === "red" ? " glow" : "")}
                onClick={() => setColor("red")}
            ></div>

            {/* LUZ AMARILLA */}
            <div
                className={"light yellow" + (color === "yellow" ? " glow" : "")}
                onClick={() => setColor("yellow")}
            ></div>

            {/* LUZ VERDE */}
            <div
                className={"light green" + (color === "green" ? " glow" : "")}
                onClick={() => setColor("green")}
            ></div>

        </div>
    );
};

export default Semaforo;
