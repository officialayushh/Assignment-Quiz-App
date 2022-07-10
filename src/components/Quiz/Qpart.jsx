import React, { useState } from "react";
import "./Qpart.css";

const Qpart = (props) => {
  const questions = [
    {
      text: "What is the world’s smallest living bird?",
      options: [
        { id: 0, text: "Dove", isCorrect: false },
        { id: 1, text: "Robin", isCorrect: false },
        { id: 2, text: "Flamingo", isCorrect: false },
        { id: 3, text: "Peregrine falcon", isCorrect: true },
      ],
    },
    {
      text: "Ostriches lay the largest eggs in the world. To the closest pound, how heavy is an ostrich egg?",
      options: [
        { id: 0, text: "3 pounds", isCorrect: true },
        { id: 1, text: "8 pounds", isCorrect: false },
        { id: 2, text: "7 pounds", isCorrect: false },
        { id: 3, text: "2 pounds", isCorrect: false },
      ],
    },
    {
      text: "Which type of bird is the national symbol of Bolivia?",
      options: [
        { id: 0, text: "Andean condor", isCorrect: true },
        { id: 1, text: "Vulture", isCorrect: false },
        { id: 2, text: "Hornbill", isCorrect: false },
        { id: 3, text: "Turkey", isCorrect: false },
      ],
    },
    {
      text: "The kakapo bird is native to which country?",
      options: [
        { id: 0, text: "California", isCorrect: false },
        { id: 1, text: "New Zealand", isCorrect: true },
        { id: 2, text: "Texas", isCorrect: false },
        { id: 3, text: "Montana", isCorrect: false },
      ],
    },
    {
      text: "Mallard ducks are native to South America, true of false?",
      options: [
        { id: 0, text: "True", isCorrect: false },
        { id: 1, text: "False", isCorrect: true },
        { id: 2, text: "Both", isCorrect: false },
        { id: 3, text: "None of these", isCorrect: false },
      ],
    },
    {
      text: "Superb, splendid, purple-crowned, and lovely are all species of which type of bird?",
      options: [
        { id: 0, text: "Kiwi", isCorrect: false },
        { id: 1, text: "Fairy-wrens", isCorrect: true },
        { id: 2, text: "Gull", isCorrect: false},
        { id: 3, text: "Penguin", isCorrect: false },
      ],
    },
    {
      text: "There is only one bird in the world which has nostrils at the end of its beak. Which is it?",
      options: [
        { id: 0, text: "Swan", isCorrect: false },
        { id: 1, text: "Crane", isCorrect: false },
        { id: 2, text: "Pigeon", isCorrect: false },
        { id: 3, text: "Kiwi", isCorrect: true },
      ],
    },
    {
      text: "Which Australian bird’s song is described as laughing?",
      options: [
        { id: 0, text: "Kookaburra", isCorrect: true },
        { id: 1, text: "Cob", isCorrect: false },
        { id: 2, text: "Potto", isCorrect: false },
        { id: 3, text: "None of these", isCorrect: false },
      ],
    },
    {
      text: "Pica pica is the scientific name for which bird?",
      options: [
        { id: 0, text: "daluni", isCorrect: false },
        { id: 1, text: "Eurasian magpie", isCorrect: true },
        { id: 2, text: "Lora", isCorrect: false },
        { id: 3, text: "Avocet", isCorrect: false },
      ],
    },
    {
      text: "What color eggs does a gray catbird lay?",
      options: [
        { id: 0, text: "red", isCorrect: false },
        { id: 1, text: "Yellow", isCorrect: false },
        { id: 2, text: "green", isCorrect: false },
        { id: 3, text: "Blue", isCorrect: true },
      ],
    },
  ];
  const [showFinal,setFinal] = useState(false);
  const [score, setScore] = useState(0);
  const [currQues,setQues] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const optionClick = (isCorrect) => {
    if(isCorrect) {
      setScore(score+1);
    }
    if(currQues + 1 < questions.length) {
      setQues(currQues+1);
    }else{
      setFinal(true);
    }
    setQues(currQues+1);
  }
  const handlePrev = () => {
    setQues(currQues - 1);
  }
  const handleNext = () => {
    setQues(currQues + 1);
  }

  const restartGame = () => {
    setScore(0);
    setQues(0);
    setFinal(false);
  }
  return (
    <div className="App">
      <h1>Birds Quiz</h1>
      <h2>Current Score: {score}</h2>
      {
      showFinal ? 
      (<div className="final-results">
        <h1>Final Results</h1>
        <h2>{score} out of {questions.length} correct - ({(score/questions.length) * 100}%)</h2>
        <button onClick={() => restartGame()} className="restart">Restart Game</button>
      </div>)
      :
      (<>
      <div className="question-card">
        <h2>Ouestion {currQues+1} out of {currQues.length}</h2>
        <h3 className="question-text">{questions[currQues].text}</h3>
        <ul>
          {questions[currQues].options.map((option) => {
            return(
              <li style={{cursor: "pointer"}} onClick={()=> optionClick(option.isCorrect)} key={option.id}>{option.text}</li>
            )
          })}
        </ul>
      </div>
      <button onClick={() => handlePrev()} className="Prev">Previous</button>
      <button onClick={() => handleNext()} className="Prev">Skip</button>
      </>
      )}
    </div>
  );
};

export default Qpart;
