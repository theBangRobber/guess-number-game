import { useState } from "react";
import Input from "./Input";
import Button from "./Button";

function Game() {
  const [numberInput, setNumberInput] = useState("");
  const [randomNumber, setRandomNumber] = useState(
    Math.floor(Math.random() * 20) + 1
  );
  const [message, setMessage] = useState("");

  const handleInput = (e) => {
    setNumberInput(e.target.value);
  };

  const triggerGuess = () => {
    const guess = Number(numberInput);

    if (isNaN(guess) || guess <= 0) {
      alert("Please enter a valid number.");
      setMessage("");
      setNumberInput("");
      return;
    }

    if (guess > randomNumber) {
      setMessage("Your guess is too high, try again.");
      setNumberInput("");
    } else if (guess < randomNumber) {
      setMessage("Your guess is too low, try again.");
      setNumberInput("");
    } else {
      setMessage("Congradulation! You've got it! Wanna play again?");
      setNumberInput("");
    }
  };

  const resetAll = () => {
    setNumberInput("");
    setRandomNumber(Math.floor(Math.random() * 20) + 1);
    setMessage("");
  };

  return (
    <>
      <h1>What's My Number❓</h1>
      <h2>Guess the number between 1 to 20</h2>
      <h2>Enter your guess below</h2>
      <Input value={numberInput} onChange={handleInput} />
      <br />
      <br />
      <Button label="Guess" onClick={triggerGuess} />
      <Button label="New Game" onClick={resetAll} />
      <p>{message}</p>
    </>
  );
}

export default Game;
