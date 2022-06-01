import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {JuanJose} from './JuanJose.js'
import {Menu} from './Menu.js'


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <div>
    <Menu />
    <JuanJose />
    <img src="assets/img/descarga.jpg" alt="hola"/>

  </div>


)


