import { useContext, forwardRef } from 'react';
import styled from 'styled-components';
import { MarkdownInputContext } from '../context/MarkdownInputContext.jsx';

const EditArea = styled.textarea`
  overflow: auto;
  flex-basis: 100%;
  border-radius: 0;
  -webkit-appearance: none;
  overflow: auto;
  resize: none;
  border: none;
  outline: none;
  font-family: ${(props) => props.theme.fontMono};
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 500;
  background: ${(props) => props.theme.black90};
  color: ${(props) => props.theme.black10};
  padding: 16px 32px;

  &::placeholder {
    color: ${(props) => props.theme.black10};
  }

  @media screen and (max-width: 500px) {
    padding: 16px;
  }
`;

const Editor = forwardRef((props, ref) => {
  const [markdownInput, setMarkdownInput] = useContext(MarkdownInputContext);
  return (
    <EditArea
      ref={ref}
      name="editor"
      id="editor"
      placeholder="Paste or type here..."
      onChange={(e) => setMarkdownInput(e.target.value)}
      value={markdownInput}
    ></EditArea>
  );
});
Editor.displayName = 'Editor';

export default Editor;
