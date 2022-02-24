import { useState, createContext, useContext} from "react";

const ReactionTimerContext = createContext();
export const UseReactionTimerContext = () => useContext(ReactionTimerContext);

function AppContextProvider(props) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [delay, setDelay] = useState(null);


    function start() {
        setIsPlaying(true)
        setDelay(2000 + Math.random() * 5000);
        console.log(isPlaying);
    }

    const values = { start, isPlaying, setIsPlaying, delay, setDelay };

    return (
        <ReactionTimerContext.Provider value={values}>
            {props.children}
        </ReactionTimerContext.Provider>
    );
}


export default AppContextProvider