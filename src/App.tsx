import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import MainPage from './pages/MainPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={MainPage} exact={true} />
        <Route path="/about" component={AboutPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
