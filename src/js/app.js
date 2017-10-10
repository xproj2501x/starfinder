/**
 * Starfinder - App
 * ===
 *
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////
import '../css/_site.scss';
import * as GAME from './game/constants';
import buildEngine from './engine';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Template from './site/views/template';

const ENGINE = buildEngine(GAME);

ReactDOM.render((
  <BrowserRouter>
    <Template />
  </BrowserRouter>
), document.getElementById('app'));
