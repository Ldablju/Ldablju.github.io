import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import Home from './components/home';
import About from './components/about';
import Project from './components/project';
import Contact from './components/contact';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
            <div className="App-nav">
              <div className="App-nav-logo">
                <h1 className="Btn"><span>Alan</span> ADAMCZYK</h1>
              </div>
              <div className="App-nav-social">
                <div className="social-btn fb">
                  <a href="https://www.facebook.com/alan.adamczyk.98" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
                </div>
                <div className="social-btn ig">
                  <a href="https://www.instagram.com/ldablju/" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
                </div>
                <div className="social-btn git">
                  <a href="https://github.com/Ldablju" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
                </div>
              </div>
            </div>
            <div className="App-content">
              <div className="App-content-menu">
                <NavLink to="/home"><div className='menu'> Strona główna</div></NavLink>
                <NavLink to="/about"><div className="menu">O mnie</div></NavLink>
                <NavLink to="/project"><div className="menu">Projekty</div></NavLink>
                <NavLink to="/contact"><div className="menu">Kontakt</div></NavLink>
              </div>
              
              <Switch>
                <Route exact path="/home">
                  <Home />
                </Route>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/project">
                  <Project />
                </Route>
                <Route path="/contact">
                  <Contact />
                </Route>
              </Switch>
              <div className="App-content-route">
                <div className="route-">
                  <div className="route-title" >
                    <h1>Witaj, świecie!</h1>
                  </div>
                  <div className="route-more">
                  <NavLink to="/home">
                    <span>Poznaj mnie</span>
                  </NavLink>
                  </div>
              </div>
              </div>
            </div>
        </div>
      </Router>
    );
  }
  
}

export default App;
