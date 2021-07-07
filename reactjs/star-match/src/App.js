import './App.css';
import logo from './logo.svg';

import React, { useState } from 'react';

export const Header = (props) => {
  return (
    <div className="help">
      Pick 1 or more numbers that sum to the number of stars
    </div>
  );
};

// Math science
const utils = {
  // Sum an array
  sum: (arr) => arr.reduce((acc, curr) => acc + curr, 0),

  // create an array of numbers between min and max (edges included)
  range: (min, max) =>
    Array.from(
      {
        length: max - min + 1,
      },
      (_, i) => min + i
    ),

  // pick a random number between min and max (edges included)
  random: (min, max) => min + Math.floor(Math.random() * (max - min + 1)),

  // Given an array of numbers and a max... Pick a random sum (< max) from the set
  // of all available sums in arr
  randomSumIn: (arr, max) => {
    const sets = [[]];
    const sums = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0, len = sets.length; j < len; j++) {
        const candidateSet = sets[j].concat(arr[i]);
        const candidateSum = utils.sum(candidateSet);
        if (candidateSum <= max) {
          sets.push(candidateSet);
          sums.push(candidateSum);
        }
      }
    }
    return sums[utils.random(0, sums.length - 1)];
  },
};

const StarsDisplay = (props) => (
  <div>
    {utils.range(1, props.count).map((starId) => (
      // <div key={starId} className="star" />

      <img key={starId} src={logo} width="50px" height="50px"/> 
    ))}
  </div>
);
const PlayNumber = (props) => {
  return (
    <button
      className="number"
      style={{ backgroundColor: colors[props.status] }}
      onClick={() => props.onClick(props.number, props.status)}
    >
      {props.number}
    </button>
  );
};

const Footer = (props) => {
  return <div className="timer">Time Remaining: 10</div>;
};
const StarMatch = () => {
  const [stars, setStars] = useState(utils.random(1, 9));
  const [availableNums, setAvailableNums] = useState(utils.range(1, 9));
  const [candidateNums, setCandidateNums] = useState([]);

  const candidatesAreWrong = utils.sum(candidateNums) > stars;

  const numberStatus = (number) => {
    if (!availableNums.includes(number)) {
      return 'used';
    }
    if (candidateNums.includes(number)) {
      return candidatesAreWrong ? 'wrong' : 'candidate';
    }
    return 'available';
  };

  const onNumberClick = (number, currentStatus) => {
    if (currentStatus === 'used') {
      return;
    }
    
    //candidate Nums
    const newCandidateNums =
    currentStatus ==='available'
    ?candidateNums.concat(number)
    :candidateNums.filter(cn=>cn!=number);
    if(utils.sum(newCandidateNums)!== stars){
        setCandidateNums(newCandidateNums);
    }
    else{
        const newAvailableNums = availableNums.filter(
            n => !newCandidateNums.includes(n)
        );
        setStars(utils.randomSumIn(newAvailableNums,9));
        setAvailableNums(newAvailableNums);
        setCandidateNums([]);
    }
  };
  return (
    <div className="game">
      <Header />
      <div className="body">
        <div className="left">
          <StarsDisplay count={stars} />
        </div>
        <div className="right">
          {utils.range(1, 9).map((number) => (
            <PlayNumber
              key={number}
              number={number}
              status={numberStatus(number)}
              onClick={onNumberClick}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

// Color Theme
const colors = {
  available: 'lightgray',
  used: 'lightgreen',
  wrong: 'lightcoral',
  candidate: 'deepskyblue',
};

function App() {
  return (
    <div>
      <StarMatch />
    </div>
  );
}

export default App;
