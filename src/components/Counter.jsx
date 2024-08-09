import { useContext } from 'react';
import { MarkdownInputContext } from '../context/MarkdownInputContext.jsx';
import wordCounter from '../utils/wordCounter.jsx';

export default function Counter() {
  const [markdownInput] = useContext(MarkdownInputContext);

  return (
    <span>
      {`Words: ${wordCounter(markdownInput)}`}
    </span>
  );
}
