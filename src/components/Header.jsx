import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import ViewModeButtons from './ViewModeButtons.jsx';
import EditButtons from './EditButtons.jsx';

const HeaderWrapper = styled.header`
  background: ${(props) => props.theme.black};
  padding: 8px 32px;
  display: flex;
  align-items: center;
  gap: 32px;

  @media screen and (max-width: 500px){
    padding: 8px 16px;
  }
`;

const HeaderLogo = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 2.5rem;
  font-weight: 700;
`;

export default function Header({ viewMode, setViewMode }) {
  return (
    <HeaderWrapper>
      <HeaderLogo>Mark</HeaderLogo>

      <ViewModeButtons
        viewMode={viewMode}
        setViewMode={setViewMode}
      />

      <EditButtons/>
    </HeaderWrapper>
  );
}

Header.propTypes = {
  viewMode: PropTypes.string,
  setViewMode: PropTypes.func,
};
