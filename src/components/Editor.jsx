import { useContext, forwardRef } from 'react';
import { MarkdownInputContext } from './MarkdownInputContext.jsx';

const Editor = forwardRef((props, ref) => {
  const [markdownInput, setMarkdownInput] = useContext(MarkdownInputContext);
  return (
    <textarea
      ref={ref}
      name="editor"
      id="editor"
      className="editor"
      placeholder="Paste or type here..."
      onChange={(e) => setMarkdownInput(e.target.value)}
    >
      {markdownInput}
    </textarea>
  );
});
Editor.displayName = 'Editor';

export default Editor;
