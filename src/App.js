// import React, { useContext } from "react";
import AppContextProvider, { UseReactionTimerContext } from "./AppContext";
import Block from "./Block";
import ButtonStart from "./ButtonStart";


const App = () => {
    const { isPlaying } = UseReactionTimerContext() || {};

    return (
        <AppContextProvider>
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-center font-bold text-xl">
                    Reaction Time Tracker
                </h1>
                <ButtonStart />
                <Block />
                {/* { isPlaying && <Block />} */}
            </div>
        </AppContextProvider>
    );
};

export default App
 