import { PropTypes } from 'prop-types';
import styled from 'styled-components';

const TabButton = styled.button`
    flex-basis: 100%;
    border: none;
    padding: 8px 16px;
    text-align: start;
    font-size: 1.5rem;
    color: ${(props) => props.theme.black10};
`;

export default function Tab({ children, setViewMode, mode }) {
  return (
    <TabButton
      onClick={() => setViewMode(mode)}
    >
      {children}
    </TabButton>
  );
}

Tab.propTypes = {
  children: PropTypes.string,
  setViewMode: PropTypes.func,
  mode: PropTypes.string,
};
