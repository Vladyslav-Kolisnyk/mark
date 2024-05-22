import { useContext } from 'react';
import Markdown from 'marked-react';
import { MarkdownInputContext } from './MarkdownInputContext.jsx';

export default function Preview() {
  const [markdownInput] = useContext(MarkdownInputContext);
  return (
    <div className="preview">
      <Markdown>
        {markdownInput}
      </Markdown>
    </div>
  );
}
