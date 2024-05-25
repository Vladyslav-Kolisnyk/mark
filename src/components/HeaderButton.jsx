import { PropTypes } from 'prop-types';

export default function HeaderButton({
  children,
  handleClick,
  args,
  isFocused = false,
  tooltip,
}) {
  return (
    <button
      className={isFocused
        ? 'header-button_focused'
        : 'header-button'
      }
      onClick={() => handleClick(args)}
      title={tooltip}
    >
      {children}
    </button>
  );
}

HeaderButton.propTypes = {
  children: PropTypes.object,
  handleClick: PropTypes.func,
  args: PropTypes.any,
  isFocused: PropTypes.bool,
  tooltip: PropTypes.string,
};
