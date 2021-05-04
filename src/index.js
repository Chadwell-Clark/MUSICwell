//     *****     Chad[well] Clark 2021     *****     //

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Musicwell } from './components/Musicwell.js';
import { BrowserRouter as Router} from "react-router-dom";



ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Musicwell />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


