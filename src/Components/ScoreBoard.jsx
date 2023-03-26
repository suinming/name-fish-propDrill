import "./styles/score-board.css";
const answersLeft = ["trout", "salmon", "tuna", "shark"];

export const ScoreBoard = ({ correctCount, incorrectCount, fishIdx }) => {
    const displayAnswers = answersLeft.filter((fish, idx) => idx >= fishIdx);
    return (
        <div id="score-board">
            <div>Incorrect 🔻: {incorrectCount}</div>
            <div id="choices-left">
                {displayAnswers.map((answer) => (
                    <div key={answer} className="choice">
                        {answer}
                    </div>
                ))}
            </div>
            <div>Correct ✅: {correctCount}</div>
        </div>
    );
};
