import { useState } from 'react';
import HeaderButton from './HeaderButton.jsx';
import ClearModal from './ClearModal.jsx';

export default function ClearButton() {
  const [displayModal, setDisplayModal] = useState(false);

  return (
    <>
      <HeaderButton
        onClick={() => {
          setDisplayModal(true);
        }}
        $focused={displayModal}
        title="clear the editor"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          height="24px"
          width="24px"
          fill="#e7e7e8"
        >
          <path
            d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M9,8H11V17H9V8M13,8H15V17H13V8Z"
          />
        </svg>
      </HeaderButton>

      {displayModal && <ClearModal setDisplayModal={setDisplayModal}/>}
    </>
  );
}
