import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import CheatCard from './CheatCard.jsx';
import cards from '../data/cheatSheetContent.json';

const Sheet = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 16px;
  border-radius: 4px;
  background: ${(props) => props.theme.black};
  display: grid;
  gap: 16px;
  width: 60vw;
  
  @media screen and (max-width: 725px) {
    width: 80vw;
  }
`;

const HeaderBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  

  h2 {
    margin: 0;
    padding: 0;
    font-size: 2rem;
  }

  button {
    background: none;
    border: none;
    display: flex;
    align-items: center;

  }
`;

const CheatCards = styled.div`
  max-height: 60vh;
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function CheatSheet({ setDisplayCheat }) {
  return (
    <Sheet>
      <HeaderBar>
        <h2>Cheat Sheet</h2>

        <button onClick={() => setDisplayCheat(false)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e7e7e8"
          >
            <path
              d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"
            />
          </svg>
        </button>
      </HeaderBar>

      <CheatCards>
        {cards.map((card, index) => <CheatCard content={card} key={index}/>)}
      </CheatCards>
    </Sheet>
  );
}

CheatSheet.propTypes = {
  setDisplayCheat: PropTypes.func,
};
