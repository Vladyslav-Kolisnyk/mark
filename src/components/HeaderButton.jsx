import styled from 'styled-components';

const HeaderButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  border: none;
  border-radius: 4px;
  
  background: ${(props) => (props.$focused ? props.theme.black70 : 'none')};

  &:hover {
    background: ${(props) => props.theme.black90}
  }
`;

export default HeaderButton;
