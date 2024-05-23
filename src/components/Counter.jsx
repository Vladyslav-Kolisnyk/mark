import { useContext } from 'react';
import { MarkdownInputContext } from './MarkdownInputContext.jsx';
import wordCounter from './wordCounter.jsx';

export default function Counter() {
  const [markdownInput] = useContext(MarkdownInputContext);

  return (
    <span className='counter'>
      {`Words: ${wordCounter(markdownInput)}`}
    </span>
  );
}
