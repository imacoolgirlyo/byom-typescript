import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import AboutPage from './pages/AboutPage';
import ArchivePage from './pages/ArchivePage';
import MainPage from './pages/MainPage';

const App: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>BYOM</title>
        <meta name="description" content="Bring Your Own Music" />
      </Helmet>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={MainPage} exact={true} />
          <Route path="/about" component={AboutPage} />
          <Route path="/archive" component={ArchivePage} />
        </Switch>
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
};

export default App;

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding : 0;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

html {
  overflow: hidden
  width: 100%
  background-color: rgb(0, 125, 123);
}

html, body, #root {
  height: 100%;
}
`;
