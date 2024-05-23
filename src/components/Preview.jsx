import { forwardRef, useContext } from 'react';
import Markdown from 'marked-react';
import { MarkdownInputContext } from './MarkdownInputContext.jsx';

const Preview = forwardRef((props, ref) => {
  const [markdownInput] = useContext(MarkdownInputContext);
  return (
    <div
      className="preview"
      ref={ref}
    >
      <Markdown>
        {markdownInput}
      </Markdown>
    </div>
  );
});
Preview.displayName = 'Preview';

export default Preview;
