import React, { useState, useEffect } from "react";
import confetti from 'canvas-confetti';

interface IOption {
    id: number,
    text?: string,
    isCorrect: boolean
}

const QuizPage: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<null | number>(null);
  const [timeLeft, setTimeLeft] = useState(5);
  const [isTimeUp, setIsTimeUp] = useState(false);
  const [message, setMessage] = useState("");
  const [score, setScore] = useState(0);
  const [showNext, setShowNext] = useState(false);
  const [showPlayAgain, setShowPlayAgain] = useState(false);
  const [isWrongAnswer, setIsWrongAnswer] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState<string | null>(null);

  const options = [
    { id: 1, text: "London", isCorrect: false },
    { id: 2, text: "Paris", isCorrect: true },
    { id: 3, text: "Berlin", isCorrect: false },
    { id: 4, text: "Madrid", isCorrect: false },
  ];

  useEffect(() => {
    if (timeLeft > 0 && !isTimeUp) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !isTimeUp) {
      setIsTimeUp(true);
      setMessage("Time's up!");
      setShowPlayAgain(true);
      showCorrectAnswer();
    }
  }, [timeLeft, isTimeUp]);

  useEffect(() => {
    if (isWrongAnswer) {
      setTimeout(() => setIsWrongAnswer(false), 1000);
    }
  }, [isWrongAnswer]);

  const handleOptionClick = (option: IOption) => {
    if (!isTimeUp) {
      setSelectedOption(option.id);
      setIsTimeUp(true);
      if (option.isCorrect) {
        setMessage("Correct!");
        setScore(score + 1);
        triggerCelebration();
        setShowNext(true);
      } else {
        setMessage("Wrong answer. Try again!");
        setShowPlayAgain(true);
        setIsWrongAnswer(true);
        showCorrectAnswer();
      }
    }
  };

  const showCorrectAnswer = () => {
    const correct = options.find(option => option.isCorrect);
    if (correct) {
      setCorrectAnswer(correct.text);
    }
  };

  const triggerCelebration = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const getOptionClass = (option: IOption) => {
    if (isTimeUp && selectedOption === option.id) {
      return option.isCorrect ? "bg-green-500 text-white" : "bg-red-500 text-white";
    }
    return "bg-white hover:bg-gray-100";
  };

  const handleNext = () => {
    // Logic for next question
    console.log("Next question");
  };

  const handlePlayAgain = () => {
    setSelectedOption(null);
    setTimeLeft(5);
    setIsTimeUp(false);
    setMessage("");
    setShowPlayAgain(false);
    setShowNext(false);
    setCorrectAnswer(null);
  };

  return (
    <div
      style={{
        background: "linear-gradient(to bottom right, violet , #8a2be2)",
      }}
      className={`w-full min-h-screen p-4 ${isWrongAnswer ? 'animate-wrong-answer' : ''}`}
    >
      <div className="flex-col justify-center w-full flex md:w-full md:justify-center items-center">
        <div className="flex w-full justify-end">
        <div className="mt-4 text-white text-xl bg-yellow-500 px-4 py-2 rounded-full animate-bounce font-semibold">
          Score: {score}
        </div>
        </div>
        <h1 className="font-serif font-semibold text-3xl m-10 text-white">
          Question 1 : 
        </h1>
        <div className="bg-white min-h-12 w-3/4 rounded-md border-dashed border-gray-700 text-center border-2 p-4 mb-4">
          <h1 className="text-center md:text-2xl font-bold h-auto">
            What is the capital of France?
          </h1>
        </div>
        {correctAnswer && (
          <div className="mt-4 text-gray-800 text-xl font-semibold">
            Correct answer: {correctAnswer}
          </div>
        )}
        <div className="w-3/4 grid grid-cols-2 gap-4 mb-4">
          {options.map((option) => (
            <button
              key={option.id}
              onClick={() => handleOptionClick(option)}
              disabled={isTimeUp}
              className={`${getOptionClass(option)} p-4 rounded-md shadow-md transition-colors duration-300 ${
                isTimeUp ? "cursor-not-allowed" : "cursor-pointer"
              }`}
            >
              {option.text}
            </button>
          ))}
        </div>
        
        <div className={`mt-4 text-white text-xl p-2 rounded-full ${!isTimeUp ? 'bg-red-500 animate-pulse' : ''}`}>
          {isTimeUp ? message : `Time left: ${timeLeft} seconds`}
        </div>

      
        {showNext && (
          <button 
            onClick={handleNext}
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Next Question
          </button>
        )}

        {showPlayAgain && (
          <button 
            onClick={handlePlayAgain}
            className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Play Again
          </button>
        )}
      </div>
    </div>
  );
};

export default QuizPage;