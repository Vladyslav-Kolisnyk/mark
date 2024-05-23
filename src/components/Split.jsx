import { ScrollSync, ScrollSyncPane } from "react-scroll-sync";
import Editor from './Editor.jsx';
import Preview from './Preview.jsx';

export default function Split() {
  return (
    <ScrollSync>
      <div className="split">
        <ScrollSyncPane>
          <div className="split-pane">
            <Editor/>
          </div>
        </ScrollSyncPane>

        <ScrollSyncPane>
          <div className="split-pane">
            <Preview/>
          </div>
        </ScrollSyncPane>
      </div>
    </ScrollSync>
  );
}
