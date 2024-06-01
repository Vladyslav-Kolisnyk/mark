import { useState } from 'react';
import Header from './components/Header.jsx';
import './styles/App.scss';
import Tabs from './components/Tabs.jsx';
import { MarkdownInputContext } from './context/MarkdownInputContext.jsx';
import Editor from './components/Editor.jsx';
import Preview from './components/Preview.jsx';
import Split from './components/Split.jsx';
import Footer from './components/Footer.jsx';
import message from './data/welcomeMessage.json';

function App() {
  const [viewMode, setViewMode] = useState('split');
  const [markdownInput, setMarkdownInput] = useState(message.message);

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

        <Footer/>
      </MarkdownInputContext.Provider>
    </div>
  );
}

export default App;
