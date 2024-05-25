import { PropTypes } from 'prop-types';
import HeaderButton from './HeaderButton.jsx';
import { buttons } from './viewModeButtonsList.jsx';

export default function ViewModeButtons({ viewMode, setViewMode }) {
  return (
    <ul className="viewmode-buttons">
      {
        buttons.map((button) => (
          <li key={button.key}>
            <HeaderButton
              handleClick={setViewMode}
              args={button.mode}
              isFocused={viewMode === button.mode}
              tooltip={button.mode}
            >
              {button.icon}
            </HeaderButton>
          </li>
        ))
      }
    </ul>
  );
}

ViewModeButtons.propTypes = {
  viewMode: PropTypes.string,
  setViewMode: PropTypes.func,
};
