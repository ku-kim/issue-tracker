import { BrowserRouter, Route, Routes } from 'react-router-dom';
import IssueList from 'pages/IssueList';
import LabelList from 'pages/LabelList';
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
          <Route path="/issueList" element={<IssueList />} />
          <Route path="/labelList" element={<LabelList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
