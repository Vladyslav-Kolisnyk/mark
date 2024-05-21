import { useState } from 'react';
import Header from './components/Header.jsx';
import './styles/App.scss';

function App() {
  const [viewMode, setViewMode] = useState('split');

  return (
    <div className="container">
      <Header
        viewMode={viewMode}
        setViewMode={setViewMode}
      />
      <div className="main">

      </div>
    </div>
  );
}

export default App;
