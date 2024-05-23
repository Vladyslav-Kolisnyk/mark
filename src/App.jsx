import { useState } from 'react';
import Header from './components/Header.jsx';
import './styles/App.scss';
import Tabs from './components/Tabs.jsx';
import { MarkdownInputContext } from './components/MarkdownInputContext.jsx';
import Editor from './components/Editor.jsx';
import Preview from './components/Preview.jsx';
import Split from './components/Split.jsx';

function App() {
  const [viewMode, setViewMode] = useState('split');
  const [markdownInput, setMarkdownInput] = useState('# Welcome!');

  return (
    <div className="container">
      <MarkdownInputContext.Provider value={[markdownInput, setMarkdownInput]}>
        <Header
          viewMode={viewMode}
          setViewMode={setViewMode}
        />

        <Tabs setViewMode={setViewMode}/>

        <div className="main">
          {viewMode === 'editor' && <Editor/>}

          {viewMode === 'preview' && <Preview/>}

          {viewMode === 'split' && <Split/>}
        </div>
      </MarkdownInputContext.Provider>
    </div>
  );
}

export default App;
