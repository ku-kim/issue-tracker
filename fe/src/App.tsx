import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Template from 'pages/Template';
import GlobalStyle from 'styles/GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div />} />
          <Route path="/template" element={<Template />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
