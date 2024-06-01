import { PropTypes } from 'prop-types';
import Tab from './Tab.jsx';

const tabs = [
  {
    name: 'Editor',
    mode: 'editor',
  },
  {
    name: 'Preview',
    mode: 'preview',
  },
];

export default function Tabs({ setViewMode }) {
  return (
    <section className="tabs">
      {
        tabs.map((tab, index) => (
            <Tab
              key={index}
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
