import { PropTypes } from 'prop-types';
import CheatCard from './CheatCard.jsx';
import { cards } from './cheatSheetContent.jsx';

export default function CheatSheet({ setDisplayCheat }) {
  return (
    <div className="cheat-sheet">
      <div className="cheat-headerbar">
        <h2>Cheat Sheet</h2>

        <button onClick={() => setDisplayCheat(false)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e8eaed"
          >
            <path
              d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"
            />
          </svg>
        </button>
      </div>

      <div className="cheat-body">
        {cards.map((card) => <CheatCard content={card} key={card.key}/>)}
      </div>
    </div>
  );
}

CheatSheet.propTypes = {
  setDisplayCheat: PropTypes.func,
};
