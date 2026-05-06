import { useState, createContext } from 'react';
import Menu from './Menu';
import Quiz from './Quiz';
import Score from './Score';
import './Main.css';

export const DataContext = createContext();

function QuizMain() {
    const [appState, setAppState] = useState('menu');
    return (
        <DataContext.Provider value={{ appState, setAppState }}>
            <div className="quiz-main">
                <h1>Web Quiz App</h1>
                {appState === 'menu' && <Menu />}
                {appState === 'quiz' && <Quiz />}
                {appState === 'score' && <Score />}
            </div>
        </DataContext.Provider>
    );
}

export default QuizMain;