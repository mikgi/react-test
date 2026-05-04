import { useContext } from "react";
import { DataContext } from "./Main";

const Menu = () => {
    const {setAppState} = useContext(DataContext);
    return (
        <div className="menu">
            <h1>Menu</h1>
            <button onClick={() => setAppState('quiz')}>Start Quiz</button>
        </div>
    );
}

export default Menu;