import styled from 'styled-components';
import CheatButton from './CheatButton.jsx';
import ClearButton from './ClearButton.jsx';
import ClipboardButton from './ClipboardButton.jsx';

const ButtonsList = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 16px;
  align-items: center;
  padding: 0;
  margin: 0;
  margin-left: auto;
`;

export default function EditButtons() {
  return (
    <ButtonsList>
      <li><CheatButton/></li>
      <li><ClipboardButton/></li>
      <li><ClearButton/></li>
    </ButtonsList>
  );
}
