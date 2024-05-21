import { PropTypes } from 'prop-types';

export default function Tab({ children, setViewMode, mode }) {
  return (
    <button
      className="tabs-tab"
      onClick={() => setViewMode(mode)}
    >
      {children}
    </button>
  );
}

Tab.propTypes = {
  children: PropTypes.object,
  setViewMode: PropTypes.func,
  mode: PropTypes.string,
};
