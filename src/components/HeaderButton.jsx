import { PropTypes } from 'prop-types';

export default function HeaderButton({
  children,
  handleClick,
  args,
  isFocused = false,
}) {
  return (
    <button
      className={isFocused
        ? 'header-button_focused'
        : 'header-button'
      }
      onClick={() => handleClick(args)}
    >
      {children}
    </button>
  );
}

HeaderButton.propTypes = {
  children: PropTypes.object,
  handleClick: PropTypes.func,
  args: PropTypes.string,
  isFocused: PropTypes.bool,
};
