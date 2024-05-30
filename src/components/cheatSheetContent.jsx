import { v4 } from 'uuid';

// eslint-disable-next-line import/prefer-default-export
export const cards = [
  {
    heading: 'Headings',
    examples: [
      '# Level 1 heading',
      '## Level 2 heading',
      '### Level 3 heading',
      '#### Level 4 heading',
      '##### Level 5 heading',
      '###### Level 6 heading',
    ],
    key: v4(),
  },
  {
    heading: 'Text',
    examples: [
      '*Italic*',
      '**Bold**',
      '***Bold and Italic***',
    ],
    key: v4(),
  },
  {
    heading: 'Lists',
    examples: [
      '- Unordered',
      '- List',
      '1. Ordered',
      '2. List',
      '1. Nested',
      '  1. List',
      '- [X] Task',
      '- [ ] List',
    ],
    key: v4(),
  },
  {
    heading: 'Horizontal Rule',
    examples: [
      '- - -',
    ],
    key: v4(),
  },
  {
    heading: 'Link',
    examples: [
      '[title](https://www.example.com)',
    ],
    key: v4(),
  },
  {
    heading: 'Image',
    examples: [
      '![alt text](image.jpg)',
    ],
    key: v4(),
  },
  {
    heading: 'Blockquote',
    examples: [
      '> blockquote',
    ],
    key: v4(),
  },
  {
    heading: 'Code',
    examples: [
      '`console.log(‘Hello World!’)`',
    ],
    key: v4(),
  },
];
