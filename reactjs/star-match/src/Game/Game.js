import Footer from './Footer'
import Header from './Header'
import PlayNumber from './PlayNumber'
import utils from './utils'
import CartoonDisplay from './CartoonDisplay'
import React, { useState, useEffect } from 'react'
import PlayAgain from './PlayAgain'

const MAX_NUMS = 9
/* Game Time in seconds */
const GAME_TIME =10 

// Custom Hook 
const useGameState = () => {

  const [stars, setStars] = useState(utils.random(1, MAX_NUMS));
  const [availableNums, setAvailableNums] = useState(utils.range(1, MAX_NUMS));
  const [candidateNums, setCandidateNums] = useState([]);
  const [secondsLeft, setSecondsLeft] = useState(GAME_TIME);

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
      setStars(utils.randomSumIn(newAvailableNums, MAX_NUMS));
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
          {utils.range(1, MAX_NUMS).map((number) => (
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