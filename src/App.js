import { useState } from "react";
import confetti from "canvas-confetti";
require('canvas-confetti');

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
        // window.location.reload();
        celebrate();
      } else {
        if (value < number) {
          setResultMessage("Guess a Larger Number");
        } else {
          setResultMessage("Guess a Small Number");
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
  };

  // function to check the game level selected by the user
  const gameLevel = (currLevel) => {
    if (currLevel === "easy") {
      setRange("0 to 10");
      setNumber(Math.floor(Math.random() * 11));
    } else if (currLevel === "medium") {
      setRange("0 to 30");
      setNumber(Math.floor(Math.random() * 31));
    } else if (currLevel === "hard") {
      setRange("0 to 100");
      setNumber(Math.floor(Math.random() * 101));
    }
  };

  // function to pop confetti when user won the game
  const celebrate = () => {
    var count = 200;
    var defaults = {
      origin: { y: 0.7 },
    };

    function fire(particleRatio, opts) {
      confetti(
        Object.assign({}, defaults, opts, {
          particleCount: Math.floor(count * particleRatio),
        })
      );
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });
    fire(0.2, {
      spread: 60,
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });

    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  return (
    // main div container
    <div className="h-screen w-full flex items-center justify-center bg2">
      {/* game container */}
      <form
        className="flex flex-col items-center gap-4 border border-black p-4 bg1 text-black rounded-lg bgShadow text-sm font-semibold"
        onSubmit={playGame}
      >
        <h1 className="font-bold text-xl text-center">Random Number Guessing Game</h1>
        {/* creating the game level section */}
        <p className="">
          Game Level :{" "}
          <span className="pl-2 font-bold">
            <select
              onChange={setGameLevel}
              className="outline-none bg-transparent border border-black text-center hover:border-[#e762bb] cursor-pointer"
            >
              <option value={"easy"}>Easy</option>
              <option value={"medium"}>Medium</option>
              <option value={"hard"}>Hard</option>
            </select>
          </span>
        </p>

        {/* level description for the user */}
        <p>
          Number Range is :{" "}
          <span className="font-bold border border-black px-2 ml-2">
            {range}
          </span>
        </p>

        <p>
          Total Attempt :{" "}
          <span className="border border-black font-bold px-2">{attempt}</span>
        </p>

        {/* para to display the result message */}
        <p className="font-bold">{resultMessage}</p>

        <div className="flex gap-4">
          {/* input box for user input */}
          <input
            onChange={inputValue}
            type="number"
            className="border border-black w-16 bg-transparent py-1 px-4 text-center hover:border-[#e762bb]"
            value={value}
          ></input>

          {/* button for checking the answer and restarting the game */}
          <button
            typeof="submit"
            className="border border-black w-fit py-1 px-4 bg2 hover:text-white hover:border-[#e762bb]"
          >
            Check Ans
          </button>
        </div>

        {/* restart button */}
        <button
          typeof="button"
          onClick={restart}
          className="border border-black w-fit py-1 px-4 bg2 hover:text-white hover:border-[#e762bb]"
        >
          Restart Game
        </button>
      </form>
    </div>
  );
};

export default App;
