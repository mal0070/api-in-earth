import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createRoot } from 'react-dom/client';
import './styles/App.css';

const root = createRoot(document.getElementById('root'));
root.render(<App />)