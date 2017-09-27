/**
 * Starfinder - App
 * ===
 *
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////
import '../css/_site.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Template from './views/template';
// import Home from './views/home';
// import Encounters from './views/encounters';

ReactDOM.render((
  <BrowserRouter>
    <Template />
  </BrowserRouter>
), document.getElementById('app'));
