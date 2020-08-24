import React from 'react';
import CssBaseline from '@material-ui/core/ScopedCssBaseline';
import Home from './Comp/index';
import Projects from './Comp/Projects';
import About from './Comp/About';
import Contact from './Comp/Contact';
import {Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <CssBaseline/>
       <Route exact path="/" component={Home}/>
       <Route exact path="/projects" component={Projects}/>
       <Route exact path="/about" component={About}/>
       <Route exact path="/contact" component={Contact}/>
        
    </div>
  );
}

export default App;
