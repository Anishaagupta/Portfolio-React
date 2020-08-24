import React from 'react';
import CssBaseline from '@material-ui/core/ScopedCssBaseline';
import Home from '../Pages/Home';
import Projects from '../Pages/Project';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import { Route } from 'react-router-dom';

function AppRouter() {
  return (
    <div>
      <CssBaseline />
      <Route exact path='/' component={Home} />
      <Route exact path='/projects' component={Projects} />
      <Route exact path='/about' component={About} />
      <Route exact path='/contact' component={Contact} />
    </div>
  );
}

export default AppRouter;
