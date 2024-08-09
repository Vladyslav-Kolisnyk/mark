import { forwardRef, useContext } from 'react';
import Markdown from 'marked-react';
import styled from 'styled-components';
import { MarkdownInputContext } from '../context/MarkdownInputContext.jsx';

const PreviewArea = styled.div`
  overflow: auto;
  flex-basis: 100%;
  height: 84vh;
  padding: 16px 32px;
  max-height: 100vh;
  overflow: auto;
  background: ${(props) => props.theme.black80};

  @media screen and (max-width: 500px) {
    padding: 16px;
  }
`;

const Preview = forwardRef((props, ref) => {
  const [markdownInput] = useContext(MarkdownInputContext);
  return (
    <PreviewArea
      ref={ref}
    >
      <Markdown>
        {markdownInput}
      </Markdown>
    </PreviewArea>
  );
});
Preview.displayName = 'Preview';

export default Preview;
