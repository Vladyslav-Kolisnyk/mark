import { PropTypes } from 'prop-types';
import ViewModeButtons from './ViewModeButtons.jsx';
import EditButtons from './EditButtons.jsx';

export default function Header({ viewMode, setViewMode }) {
  return (
    <header className="header">
      <div className="header-logo">Mark</div>

      <ViewModeButtons
        viewMode={viewMode}
        setViewMode={setViewMode}
      />

      <EditButtons/>
    </header>
  );
}

Header.propTypes = {
  viewMode: PropTypes.string,
  setViewMode: PropTypes.func,
};
