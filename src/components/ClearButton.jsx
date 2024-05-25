import { useState } from 'react';
import HeaderButton from './HeaderButton.jsx';
import ClearModal from './ClearModal.jsx';

export default function ClearButton() {
  const [displayModal, setDisplayModal] = useState(false);

  return (
    <>
      <HeaderButton
        isFocused={displayModal}
        handleClick={setDisplayModal}
        args={true}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
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
