import { ScrollSync, ScrollSyncPane } from 'react-scroll-sync';
import styled from 'styled-components';
import Editor from './Editor.jsx';
import Preview from './Preview.jsx';

const SplitWrapper = styled.div`
  display: flex;
  height: 100%;

  @media screen and (max-width: 500px) {
    :last-child {
      display: none;
    }
  }
`;

export default function Split() {
  return (
    <ScrollSync>
      <SplitWrapper>
        <ScrollSyncPane>
          <Editor/>
        </ScrollSyncPane>

        <ScrollSyncPane>
          <Preview/>
        </ScrollSyncPane>
      </SplitWrapper>
    </ScrollSync>
  );
}
