import React from 'react';
import ReactDOM from 'react-dom/client';
import "./translate/i18n"
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import 'swiper/css';
import 'swiper/css/bundle'
import { AppRoute } from './Routes';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <AppRoute/>
  
);
