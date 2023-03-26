import "./App.css";
import { useState } from "react";
import { GameBoard } from "./Components/GameBoard";
import { ScoreBoard } from "./Components/ScoreBoard";
import "./Components/styles/final-score.css";

function App() {
    let [correctCount, setCorrectCount] = useState(0);
    let [incorrectCount, setIncorrectCount] = useState(0);
    let [fishIdx, setFishIdx] = useState(0);

    function changeCounter(action) {
        action === "correct"
            ? setCorrectCount(++correctCount)
            : setIncorrectCount(++incorrectCount);
        setFishIdx(++fishIdx);
    }
    return (
        <div className="App">
            <header>
                <ScoreBoard
                    incorrectCount={incorrectCount}
                    correctCount={correctCount}
                    fishIdx={fishIdx}
                />
                <GameBoard
                    changeCounter={changeCounter}
                    correctCount={correctCount}
                    fishIdx={fishIdx}
                />
            </header>
        </div>
    );
}

export default App;
