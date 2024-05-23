import { ScrollSync, ScrollSyncPane } from 'react-scroll-sync';
import Editor from './Editor.jsx';
import Preview from './Preview.jsx';

export default function Split() {
  return (
    <ScrollSync>
      <div className="split">
        <ScrollSyncPane>
          <Editor/>
        </ScrollSyncPane>

        <ScrollSyncPane>
          <Preview/>
        </ScrollSyncPane>
      </div>
    </ScrollSync>
  );
}
