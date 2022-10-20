import { useState } from "react";

const App = () => {
  // using the useState to store the randomly generated number
  const [number, setNumber] = useState(Math.floor(Math.random() * 11));
  console.log(number);

  // using the useState to check the value of input field
  const [value, setValue] = useState("");

  // using useState to count the number of attempt to win the game
  const [attempt, setAttempt] = useState("0");

  // useState to display the result message of winning or lossing the game
  const [resultMessage, setResultMessage] = useState("Guess the Number");

  // useState to display the range of the data based on the level
  const [range, setRange] = useState("0 to 10");

  // useState to know the current game level
  const [currLevel, setCurrLevel] = useState("easy");

  // function to get the user input data
  const inputValue = (event) => {
    setValue(event.target.value);
  };

  const playGame = (event) => {
    event.preventDefault();
    if (value !== undefined) {
      if (value == number) {
        setResultMessage("You won the Game");
        // after winning the game, resetting all the values through the restart function
        // restart();
      } else {
        if (value < number) {
          setResultMessage("Guess a large number");
        } else {
          setResultMessage("Guess a small number");
        }
      }
      // updating the value of attempt
      setAttempt(Number(attempt) + 1);
    }
  };

  // resetting all the values to start a fresh new game
  let restart = (event) => {
    event.preventDefault();
    setAttempt(0);
    setResultMessage("Guess the Number");
    gameLevel(currLevel);
    setValue("");
  };

  // function to set the game level according to the user input
  const setGameLevel = (event) => {
    setCurrLevel(event.target.value);
    gameLevel(event.target.value);
  }

  // function to check the game level selected by the user
  const gameLevel = (currLevel) => {
    if (currLevel === "easy") {
      setRange("0 to 10");
      setNumber(Math.floor(Math.random() * 11));
    }
    else if (currLevel === "medium") {
      setRange("0 to 30");
      setNumber(Math.floor(Math.random() * 31));
    }
    else if(currLevel === "hard"){
      setRange("0 to 100");
      setNumber(Math.floor(Math.random() * 101));
    }
  }

  return (
    // main div container
    <div className="h-screen w-full flex items-center justify-center bg2">
      {/* game container */}
      <form
        className="flex flex-col items-center gap-4 border border-black p-4 bg1 text-black rounded-lg"
        onSubmit={playGame}
      >
        <h1>Random Number Guessing Game</h1>
        {/* creating the game level section */}
        <p>
          Game Level{" "}
          <span>
            <select onChange={setGameLevel}>
              <option value={"easy"}>Easy</option>
              <option value={"medium"}>Medium</option>
              <option value={"hard"}>Hard</option>
            </select>
          </span>
        </p>

        {/* level description for the user */}
        <p>
          Number Range is : <span>{range}</span>
        </p>

        <p>
          Total Attempt : <span>{attempt}</span>
        </p>

        {/* para to display the result message */}
        <p>{resultMessage}</p>

        {/* input box for user input */}
        <input
          onChange={inputValue}
          type="number"
          className="border border-black w-fit bg-transparent"
          value={value}
        ></input>

        {/* button for checking the answer and restarting the game */}
        <div>
          <button typeof="submit" className="border border-black w-fit">
            Check Ans
          </button>
          <button
            typeof="button"
            onClick={restart}
            className="border border-black w-fit"
          >
            Restart Game
          </button>
        </div>
      </form>
    </div>
  );
};

export default App;