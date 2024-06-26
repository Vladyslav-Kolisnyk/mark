import { useContext } from 'react';
import { PropTypes } from 'prop-types';
import { MarkdownInputContext } from '../context/MarkdownInputContext.jsx';

export default function ClearModal({ setDisplayModal }) {
  const [markdowInput, setMarkdownInput] = useContext(MarkdownInputContext);

  function clearEditor() {
    setMarkdownInput('');
  }

  return (
    <div className="clear-modal">
      <div className="clear-message">
        Are you sure you want to clear the editor?
      </div>

      <div className="modal-buttons">
        <button
          className='clear-button'
          onClick={() => {
            clearEditor();
            setDisplayModal(false);
          }}
        >
          Clear
        </button>

        <button
          className="cancel-button"
          onClick={() => setDisplayModal(false)}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

ClearModal.propTypes = {
  setDisplayModal: PropTypes.func,
};
