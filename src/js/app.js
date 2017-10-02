/**
 * Starfinder - App
 * ===
 *
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////
import '../css/_site.scss';
import buildEngine from './engine';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Template from './site/views/template';

buildEngine();

ReactDOM.render((
  <BrowserRouter>
    <Template />
  </BrowserRouter>
), document.getElementById('app'));
