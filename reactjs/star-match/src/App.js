import './App.css';
import utils from './util.js';
import Header from './Header.js';
import PlayNumber from './PlayNumber.js';

// STAR MATCH - Starting Template

const StarMatch = () => {
  const stars = utils.random(1, 9);
  return (
    <div className="game">
      <Header />
      <div className="body">
        <div className="left">
          {utils.range(1, stars).map((starId) => (
            <div key={starId} className="star" />
          ))}
        </div>
        <div className="right">
          {utils.range(1, 9).map((number) => (
            <PlayNumber key={number} number={number} />
          ))}
        </div>
      </div>
      <div className="timer">Time Remaining: 10</div>
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
