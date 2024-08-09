import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme.jsx';
import Header from './components/Header.jsx';
import 'normalize.css';
import Tabs from './components/Tabs.jsx';
import { MarkdownInputContext } from './context/MarkdownInputContext.jsx';
import Editor from './components/Editor.jsx';
import Preview from './components/Preview.jsx';
import Split from './components/Split.jsx';
import Footer from './components/Footer.jsx';
import message from './data/welcomeMessage.json';

const Container = styled.div`
  font-family: ${(props) => props.theme.fontMain};
  color: ${(props) => props.theme.black10};
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.div`
  flex-basis: 100%;
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.black80};
`;

function App() {
  const [viewMode, setViewMode] = useState('split');
  const [markdownInput, setMarkdownInput] = useState(message.message);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <MarkdownInputContext.Provider value={[markdownInput, setMarkdownInput]}>
          <Header
            viewMode={viewMode}
            setViewMode={setViewMode}
          />

          <Tabs setViewMode={setViewMode}/>

          <Main>
            {viewMode === 'editor' && <Editor/>}

            {viewMode === 'preview' && <Preview/>}

            {viewMode === 'split' && <Split/>}
          </Main>

          <Footer/>
        </MarkdownInputContext.Provider>
      </Container>
    </ThemeProvider>
  );
}

export default App;
