import styled from 'styled-components';
import Counter from './Counter.jsx';
import FooterLink from './FooterLink.jsx';

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => props.theme.black70};
  padding: 4px 32px;

  @media screen and (max-width: 500px){
    padding: 4px 16px;
  }

`;

export default function Footer() {
  return (
    <FooterWrapper>
      <Counter/>

      <FooterLink/>
    </FooterWrapper>
  );
}
