import ClearButton from './ClearButton.jsx';
import ClipboardButton from './ClipboardButton.jsx';

export default function EditButtons() {
  return (
    <ul className="edit-buttons">
      <li><ClipboardButton/></li>
      <li><ClearButton/></li>
    </ul>
  );
}
