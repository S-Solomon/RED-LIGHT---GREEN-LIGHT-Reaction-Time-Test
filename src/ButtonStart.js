import React from "react";
import { UseReactionTimerContext } from "./AppContext";

const ButtonStart = () => {
    const { start } = UseReactionTimerContext();

    return (
        <button onClick={start} className="m-8 bg-green-500 p-2 rounded-3xl w-24 text-white">Start</button>
    );
};

export default ButtonStart;
