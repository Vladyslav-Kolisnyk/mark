import CheatButton from './CheatButton.jsx';
import ClearButton from './ClearButton.jsx';
import ClipboardButton from './ClipboardButton.jsx';

export default function EditButtons() {
  return (
    <ul className="edit-buttons">
      <li><CheatButton/></li>
      <li><ClipboardButton/></li>
      <li><ClearButton/></li>
    </ul>
  );
}
