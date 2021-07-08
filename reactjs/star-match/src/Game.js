import './App.css'
import Footer from './Footer'
import Header from './Header'
import PlayNumber from './PlayNumber'
import utils from './utils'
import CartoonDisplay from './CartoonDisplay'
import React, { useState, useEffect } from 'react'





const PlayAgain = props => (
  <div className="game-done">
    <div
      className="message"
      style={{ color: props.gameStatus === 'lost' ? 'red' : 'green' }}
    >
      {props.gameStatus === 'lost' ? 'Game Over' : 'Nice. You Won!!'}
    </div>
    <button onClick={props.onClick}>Play Again</button>
  </div>
)

// Custom Hook 
const useGameState = () => {

  const [stars, setStars] = useState(utils.random(1, 9));
  const [availableNums, setAvailableNums] = useState(utils.range(1, 9));
  const [candidateNums, setCandidateNums] = useState([]);
  const [secondsLeft, setSecondsLeft] = useState(15);

  useEffect(() => {
    if (secondsLeft > 0 && availableNums.length > 0) {
      const timerId = setTimeout(() => {
        setSecondsLeft(secondsLeft - 1);
      }, 1000);
      return () => clearTimeout(timerId);
    }
  });

  const setGameState = (newCandidateNums) => {
    if (utils.sum(newCandidateNums) !== stars) {
      setCandidateNums(newCandidateNums);
    }
    else {
      const newAvailableNums = availableNums.filter(
        n => !newCandidateNums.includes(n)
      );
      setStars(utils.randomSumIn(newAvailableNums, 9));
      setAvailableNums(newAvailableNums);
      setCandidateNums([]);
    }
  };
  return { stars, availableNums, candidateNums, secondsLeft, setGameState };
}

const Game = (props) => {
  const
    { stars,
      availableNums,
      secondsLeft,
      candidateNums,
      setGameState
    } = useGameState();

  const candidatesAreWrong = utils.sum(candidateNums) > stars;
  const gameStatus = availableNums.length === 0 ? 'won'
    : secondsLeft === 0 ? 'lost' : 'active';

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
    if (gameStatus !== 'active' || currentStatus === 'used') {
      return;
    }
    //candidate Nums
    const newCandidateNums =
      currentStatus === 'available'
        ? candidateNums.concat(number)
        : candidateNums.filter(cn => cn !== number);
    setGameState(newCandidateNums);
  };
  return (
    <div className="game">
      <Header />
      <div className="body">
        <div className="left">
          {gameStatus !== 'active' ?
            (<PlayAgain onClick={props.startNewGame} gameStatus={gameStatus} />)
            :
            (<CartoonDisplay count={stars} />)}

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
      <Footer timeLeft={secondsLeft} />
    </div>
  );
};



export default Game;