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
    setNumber(Math.floor(Math.random() * 11));
    setValue("");
  };

  return (
    // main div container
    <div className="h-screen w-full flex items-center justify-center bg2">
      {/* game container */}
      <form className="flex flex-col items-center gap-4 border border-black p-4 bg1 text-black rounded-lg" onSubmit={playGame}>
        <h1>Random Number Guessing Game</h1>
        <p>Guess a number between 0 to 10</p>
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
      </form>
    </div>
  );
};

export default App;