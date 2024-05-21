import { PropTypes } from 'prop-types';
import Tab from './Tab.jsx';

export default function Tabs({ setViewMode }) {
  return (
    <section className="tabs">
      <Tab
        setViewMode={setViewMode}
        mode={'editor'}
      >
        Editor
      </Tab>

      <Tab
        setViewMode={setViewMode}
        mode={'preview'}
      >
        Preview
      </Tab>
    </section>
  );
}

Tabs.propTypes = {
  setViewMode: PropTypes.func,
};
