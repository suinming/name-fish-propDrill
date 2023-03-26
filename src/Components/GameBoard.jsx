import "./styles/game-board.css";
import { useState } from "react";
import { Images } from "../assets/images";

const initialFishes = [
    {
        name: "trout",
        url: Images.trout,
    },
    {
        name: "salmon",
        url: Images.salmon,
    },
    {
        name: "tuna",
        url: Images.tuna,
    },
    {
        name: "shark",
        url: Images.shark,
    },
];

export const GameBoard = ({
    correctCount,
    changeCounter,
    fishIdx,
}) => {
    const [fishInput, setFishInput] = useState("");
    const nextFishToName =
        fishIdx <= initialFishes.length - 1 ? initialFishes[fishIdx] : null;

    function handleSubmit(e) {
        e.preventDefault();
        const validateResult = validate(fishInput, nextFishToName.name);
        changeCounter(validateResult);
        setFishInput("");
    }
    function validate(input, answer) {
        return input === answer ? "correct" : "incorrect";
    }
    if (nextFishToName) {
        return (
            <div id="game-board">
                <div id="fish-container">
                    <img src={nextFishToName.url} alt={nextFishToName.name} />
                </div>
                <form id="fish-guess-form" onSubmit={handleSubmit}>
                    <label htmlFor="fish-guess">
                        What kind of fish is this?
                    </label>
                    <input
                        type="text"
                        name="fish-guess"
                        value={fishInput}
                        onChange={(e) => setFishInput(e.target.value)}
                    />
                    <input type="submit" />
                </form>
            </div>
        );
    } else {
        return (
            <div
                style={{
                    width: "100%",
                    height: "500px",
                    padding: "50px",
                    textAlign: "center",
                    margin: "100px auto",
                    background: "rgb(156, 238, 144)",
                }}
            >
                <h2>Your score:</h2>
                <h3>{correctCount}</h3>
                <hr
                    style={{ height: "5px", width: "10%", background: "black" }}
                />
                <h3>{initialFishes.length}</h3>
            </div>
        );
    }
};
