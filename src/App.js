import React, { useState } from 'react';
import BannerCardItem from './components/BannerCardItem';

import './App.css';

function App() {

  const bannerCardsList = [
    {
      id: 1,
      Question: 'What is the primary purpose of React?',
      Option1: 'A. Server-side scripting',
      Option2: 'B. Building user interfaces',
      Option3: 'C. Database management',
      Option4: 'D. Backend development',
      CorrectOption: 'B. Building user interfaces',
      className: 'card-1',
    },
    {
      id: 2,
      Question: 'What is a React component?',
      Option1:
        'A. A function or class that optionally accepts inputs and returns a React element',
      Option2: 'B. A function that fetches data from the server',
      Option3: 'C. A CSS class that styles a page',
      Option4: 'D. A JavaScript array used to manage state',
      CorrectOption:
        'A. A function or class that optionally accepts inputs and returns a React element',
      className: 'card-2',
    },
    {
      id: 3,
      Question: 'Which hook is used to manage state in a functional component?',
      Option1: 'A. useEffect',
      Option2: 'B. useState',
      Option3: 'C. useContext',
      Option4: 'D. useReducer',
      CorrectOption: 'B. useState',
      className: 'card-1',
    },
    {
      id: 4,
      Question: 'What is JSX in React?',
      Option1: 'A. A CSS-in-JS library for styling components',
      Option2: 'B. A syntax extension for JavaScript that looks similar to HTML',
      Option3:
        'C. A templating engine for rendering React components on the server',
      Option4: 'D. A method for making API requests in React',
      CorrectOption:
        'B. A syntax extension for JavaScript that looks similar to HTML',
      className: 'card-2',
    },
    {
      id: 5,
      Question:
        'How can you pass data from a parent component to a child component in React?',
      Option1: 'A. Using useState',
      Option2: 'B. By passing props',
      Option3: 'C. By using context',
      Option4: 'D. By using Redux',
      CorrectOption: 'B. By passing props',
      className: 'card-1',
    },
  ]
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [resultMessage, setResultMessage] = useState(null);

  const handleAnswerSelect = selectedOption => {
    const correctAnswer = bannerCardsList[currentQuestionIndex].CorrectOption;

    if (selectedOption === correctAnswer) {
      setResultMessage(`Congratulations! The correct answer is ${correctAnswer}`);
    } else {
      setResultMessage(`Incorrect! The correct answer is ${correctAnswer}`);
    }

    setTimeout(() => {
      setResultMessage(null);
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    }, 3000); // Move to next question after 3 seconds
  };

  if (currentQuestionIndex >= bannerCardsList.length) {
    return <h1>You've completed the quiz!</h1>;
  }

  return (
    <>
      <h1 className="mm">KBC-style game</h1>
      <h1 className="mp">Instructions:</h1>
      <p className="mp">
        1.After Submitting a question it will automatically navigate to the next question
      </p>
      <p className="mp">2.If any issue occurred please reload the page.</p>
      <div className="app-container">
        {resultMessage && <h2 className="result-message">{resultMessage}</h2>}

        <ul className="banner-cards-list">
          <BannerCardItem
            bannerDetails={bannerCardsList[currentQuestionIndex]}
            onAnswerSelect={handleAnswerSelect}
          />
        </ul>
      </div>
    </>)
}

export default App;
