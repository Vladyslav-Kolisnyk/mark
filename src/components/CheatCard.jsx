import { PropTypes } from 'prop-types';
import styled from 'styled-components';

const Card = styled.div`
  display: flex;

  h3 {
    margin: 0;
    padding: 0%;
    font-size: 1.5rem;
    flex-basis: 100%

  }

  @media screen and (max-width: 500px) {
    flex-direction: column;
    align-items: stretch;
    gap: 8px;
  }
`;

const Example = styled.div`
  flex-basis: 100%;
  padding: 16px;
  background: ${(props) => props.theme.black80};
  border-radius: 4px;
  display: grid;
  gap: 8px;
`;

export default function CheatCard({ content }) {
  return (
    <Card>
      <h3>{content.heading}</h3>

      <Example>
        {content.examples.map((example, index) => <span key={index}>{example}</span>)}
      </Example>
    </Card>
  );
}

CheatCard.propTypes = {
  content: PropTypes.object,
};
