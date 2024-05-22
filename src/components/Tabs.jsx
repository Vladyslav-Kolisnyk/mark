import { PropTypes } from 'prop-types';
import Tab from './Tab.jsx';
import { tabs } from './tabsList.jsx';

export default function Tabs({ setViewMode }) {
  return (
    <section className="tabs">
      {
        tabs.map((tab) => (
            <Tab
              key={tab.key}
              setViewMode={setViewMode}
              mode={tab.mode}
            >
              {tab.name}
            </Tab>
        ))
      }
    </section>
  );
}

Tabs.propTypes = {
  setViewMode: PropTypes.func,
};
