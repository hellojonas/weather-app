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
import { FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Container>
        <div className={styles.wrapper}>
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

          <div className={styles.footer}>
            <span className={styles.copy}>
              &copy; Hello Jonas {new Date().getFullYear()}
            </span>
            <div className={styles.social}>
              <a
                href="https://github.com/hellojonas"
                target="_blank"
                rel="noreferrer"
                className={styles.socialIcon}
              >
                <FaGithub />
              </a>
              <a
                href="https://twitter.com/hellojonashp"
                target="_blank"
                rel="noreferrer"
                className={styles.socialIcon}
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com/hellojonashp"
                target="_blank"
                rel="noreferrer"
                className={styles.socialIcon}
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default App;
