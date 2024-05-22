import { PropTypes } from 'prop-types';
import { v4 } from 'uuid';
import Tab from './Tab.jsx';

export default function Tabs({ setViewMode }) {
  const tabs = [
    { name: 'Editor', mode: 'editor', key: v4() },
    { name: 'Editor', mode: 'preview', key: v4() },
  ];

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
