import React from 'react';
import './App.css';
import styles from './App.module.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar/Navbar';
import Container from './components/Container/Container';
import Home from './views/Home/Home';
import Forecast from './views/Forecast/Forecast';
import { Body1 } from './components/Typography/Typography';
import PageNotFound from './views/PageNotFound/PageNotFound';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Container>
        <div className={styles.header}>
          <Body1>
            <span className={styles.name}>Tempo</span>
          </Body1>
        </div>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/agora">
            <Redirect to="/" />
          </Route>
          <Route path="/previsao">
            <Forecast />
          </Route>
          <Route path="*">
            <PageNotFound></PageNotFound>
          </Route>
        </Switch>
      </Container>
    </div>
  );
}

export default App;
