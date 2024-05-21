import { useState } from 'react';
import Header from './components/Header.jsx';
import './styles/App.scss';
import Tabs from './components/Tabs.jsx';

function App() {
  const [viewMode, setViewMode] = useState('split');
  return (
    <div className="container">
      <Header
        viewMode={viewMode}
        setViewMode={setViewMode}
      />
      <Tabs setViewMode={setViewMode}/>

      <div className="main">

      </div>
    </div>
  );
}

export default App;
