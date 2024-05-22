import { useContext } from 'react';
import { MarkdownInputContext } from './MarkdownInputContext.jsx';

export default function Editor() {
  const [markdownInput, setMarkdownInput] = useContext(MarkdownInputContext);
  return (
    <textarea
      name="editor"
      id="editor"
      className="editor"
      placeholder="Paste or type here..."
      onChange={(e) => setMarkdownInput(e.target.value)}
    >
      {markdownInput}
    </textarea>
  );
}
