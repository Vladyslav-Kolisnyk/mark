import { PropTypes } from 'prop-types';
import styled from 'styled-components';
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

const TabsWrapper = styled.div`
  display: none;

  @media screen and (max-width: 500px){
    display: flex;
    align-items: stretch; 

    :first-child {
      background: ${(props) => props.theme.black90}
    }

    :last-child {
      background: ${(props) => props.theme.black80}
    }
  }
`;

export default function Tabs({ setViewMode }) {
  return (
    <TabsWrapper>
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
    </TabsWrapper>
  );
}

Tabs.propTypes = {
  setViewMode: PropTypes.func,
};
