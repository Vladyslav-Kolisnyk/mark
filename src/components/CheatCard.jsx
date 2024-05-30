import { PropTypes } from 'prop-types';

export default function CheatCard({ content }) {
  return (
    <div className="cheat-card">
      <h3>{content.heading}</h3>

      <div className="cheat-example">
        {content.examples.map((example, index) => <span key={index}>{example}</span>)}
      </div>
    </div>
  );
}

CheatCard.propTypes = {
  content: PropTypes.objext,
};
