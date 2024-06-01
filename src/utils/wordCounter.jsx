const markdownChars = [
  '#',
  '##',
  '###',
  '####',
  '#####',
  '######',
  '>',
  '>>',
  '-',
  '---',
  '```',
  '- [ ]',
  '- [X]',
  '',
  ' ',
  '  ',
  ':',
  '|',
];

export default function wordCounter(rawMarkdown) {
  const words = rawMarkdown
    .split('/')
    .join(' ')
    .split(' ');

  let counter = 0;
  // eslint-disable-next-line array-callback-return
  words.map((word) => {
    if (!markdownChars.includes(word)) counter += 1;
  });

  return counter;
}
